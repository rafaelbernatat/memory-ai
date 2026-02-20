import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { extname, join } from 'node:path';

const PORT = Number(process.env.PORT || 3000);
function getDataFile() {
  return join(process.cwd(), 'data', 'projects.json');
}

function getWebRoot() {
  return join(process.cwd(), 'apps', 'web');
}

const THEMES = [
  { id: 'aniversario-infantil', name: 'Aniversário Infantil' },
  { id: 'aniversario-adulto', name: 'Aniversário Adulto' },
  { id: 'casamento', name: 'Casamento' },
  { id: 'viagem', name: 'Viagem' },
  { id: 'formatura', name: 'Formatura' },
  { id: 'memorial', name: 'Memorial/Homenagem' }
];

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml'
};

async function ensureDataFile() {
  await mkdir(join(process.cwd(), 'data'), { recursive: true });
  const dataFile = getDataFile();
  if (!existsSync(dataFile)) {
    await writeFile(dataFile, '[]\n', 'utf8');
  }
}

async function readProjects() {
  await ensureDataFile();
  const content = await readFile(getDataFile(), 'utf8');
  return JSON.parse(content);
}

async function writeProjects(projects) {
  await writeFile(getDataFile(), `${JSON.stringify(projects, null, 2)}\n`, 'utf8');
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function validateProjectInput(input) {
  const errors = [];

  if (!input.name || typeof input.name !== 'string' || input.name.trim().length < 2) {
    errors.push('name deve ter ao menos 2 caracteres.');
  }

  if (!input.themeId || !THEMES.some((theme) => theme.id === input.themeId)) {
    errors.push('themeId inválido.');
  }

  if (input.photoDuration !== undefined) {
    if (typeof input.photoDuration !== 'number' || input.photoDuration < 2 || input.photoDuration > 5) {
      errors.push('photoDuration deve estar entre 2 e 5 segundos.');
    }
  }

  if (input.youtubeUrl && !String(input.youtubeUrl).includes('youtube.com/watch')) {
    errors.push('youtubeUrl deve ser um link válido do YouTube.');
  }

  return errors;
}

async function serveStatic(req, res) {
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = join(getWebRoot(), url);
  const extension = extname(filePath);

  try {
    const content = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[extension] || 'application/octet-stream'
    });
    res.end(content);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  }
}

export function createMemoriaServer() {
  return createServer(async (req, res) => {
    try {
      if (req.method === 'GET' && req.url === '/health') {
        sendJson(res, 200, { status: 'ok' });
        return;
      }

      if (req.method === 'GET' && req.url === '/api/themes') {
        sendJson(res, 200, { themes: THEMES });
        return;
      }

      if (req.method === 'GET' && req.url === '/api/projects') {
        const projects = await readProjects();
        sendJson(res, 200, { projects });
        return;
      }

      if (req.method === 'POST' && req.url === '/api/projects') {
        const input = await getRequestBody(req);
        const validationErrors = validateProjectInput(input);
        if (validationErrors.length > 0) {
          sendJson(res, 400, { errors: validationErrors });
          return;
        }

        const projects = await readProjects();
        const project = {
          id: randomUUID(),
          name: input.name.trim(),
          eventDate: input.eventDate || null,
          message: input.message || null,
          themeId: input.themeId,
          photoDuration: input.photoDuration ?? 3,
          longVideoStrategy: input.longVideoStrategy || 'clips',
          youtubeUrl: input.youtubeUrl || null,
          status: 'draft',
          createdAt: new Date().toISOString()
        };

        projects.push(project);
        await writeProjects(projects);
        sendJson(res, 201, { project });
        return;
      }

      if (req.method === 'PATCH' && req.url?.startsWith('/api/projects/')) {
        const projectId = req.url.split('/').at(-1);
        const input = await getRequestBody(req);
        const projects = await readProjects();
        const project = projects.find((item) => item.id === projectId);

        if (!project) {
          sendJson(res, 404, { error: 'Projeto não encontrado.' });
          return;
        }

        if (!['draft', 'processing', 'preview_ready', 'paid', 'rendering', 'done'].includes(input.status)) {
          sendJson(res, 400, { error: 'Status inválido.' });
          return;
        }

        project.status = input.status;
        project.updatedAt = new Date().toISOString();
        await writeProjects(projects);
        sendJson(res, 200, { project });
        return;
      }

      if (req.url?.startsWith('/api/')) {
        sendJson(res, 404, { error: 'Rota não encontrada.' });
        return;
      }

      await serveStatic(req, res);
    } catch (error) {
      sendJson(res, 500, {
        error: 'Erro interno',
        detail: error instanceof Error ? error.message : 'unknown'
      });
    }
  });
}

if (process.argv[1] && process.argv[1].endsWith('apps/api/server.js')) {
  const server = createMemoriaServer();
  server.listen(PORT, () => {
    console.log(`Memória AI rodando em http://localhost:${PORT}`);
  });
}
