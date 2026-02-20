# Memória AI - Bootstrap do SaaS

Base inicial do SaaS construída a partir do PRD (`PRD_MEMORIA_AI.md`).

## O que está implementado

- API HTTP em Node.js para:
  - `GET /health`
  - `GET /api/themes`
  - `GET /api/projects`
  - `POST /api/projects`
  - `PATCH /api/projects/:id`
- Persistência local em `data/projects.json`.
- Front-end estático (HTML/CSS/JS) para criar e listar projetos.
- Validações iniciais alinhadas ao PRD:
  - tema obrigatório,
  - duração de foto entre 2-5s,
  - link do YouTube opcional com formato esperado.

## Rodando localmente

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Testes

```bash
npm test
```

## Próximos passos sugeridos

1. Migrar persistência para PostgreSQL.
2. Adicionar autenticação (email/senha + OAuth Google).
3. Implementar pipeline assíncrono de geração (`processing`, `preview_ready`).
4. Integrar upload de mídia (local + Google Drive + Google Fotos).
5. Implementar motor de processamento com FFmpeg + filas (Redis/BullMQ).
