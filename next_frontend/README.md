# Atlas Journal Frontend

Frontend editorial em Next.js + Sass, pronto para consumir WordPress como CMS headless.

## Rodar localmente

```bash
npm install
npm run dev
```

## Stack

- Next.js 14 (App Router)
- React 18
- Sass/SCSS Modules
- Dados mockados em `src/lib/data.js`

## Páginas

- `/` Home modular
- `/historia` Página institucional
- `/categoria/[slug]` Lista com paginação simples
- `/post/[slug]` Single limpa

## Próximo passo

Trocar os mocks por fetch em endpoints do WordPress REST API ou WPGraphQL.
