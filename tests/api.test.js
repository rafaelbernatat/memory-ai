import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createMemoriaServer } from '../apps/api/server.js';

async function withServer(run) {
  const server = createMemoriaServer();
  server.listen(0);
  await once(server, 'listening');
  const { port } = server.address();
  try {
    await run(port);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

test('health endpoint responds ok', { concurrency: false }, async () => {
  const tempRoot = await mkdtemp(join(tmpdir(), 'memoria-ai-health-'));
  process.chdir(tempRoot);

  await withServer(async (port) => {
    const response = await fetch(`http://127.0.0.1:${port}/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.status, 'ok');
  });
});

test('create project validates and persists', { concurrency: false }, async () => {
  const tempRoot = await mkdtemp(join(tmpdir(), 'memoria-ai-projects-'));
  process.chdir(tempRoot);

  await withServer(async (port) => {
    const badResponse = await fetch(`http://127.0.0.1:${port}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'A', themeId: 'invalid' })
    });
    assert.equal(badResponse.status, 400);

    const createResponse = await fetch(`http://127.0.0.1:${port}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Sofia',
        themeId: 'aniversario-infantil',
        photoDuration: 3,
        youtubeUrl: 'https://youtube.com/watch?v=abc123'
      })
    });
    assert.equal(createResponse.status, 201);
    const created = await createResponse.json();
    assert.equal(created.project.name, 'Sofia');

    const listResponse = await fetch(`http://127.0.0.1:${port}/api/projects`);
    const listBody = await listResponse.json();
    assert.equal(listBody.projects.length, 1);
  });
});
