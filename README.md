# Atlas Journal

Portal editorial moderno desenvolvido com **Next.js** no frontend e **WordPress Headless CMS** no backend.

Este projeto foi pensado como uma arquitetura desacoplada, onde o WordPress gerencia conteúdo, categorias, mídia e publicação, enquanto o frontend em Next.js entrega performance, SEO e experiência moderna.

---

## Demonstração em vídeo

Apresentação rápida do sistema (2 minutos):

https://www.youtube.com/watch?v=JIvyoeyBwBo

---

## Stack principal

### Frontend

- Next.js
- React
- Sass (SCSS)
- SSR / SSG / ISR
- Consumo de API REST / WordPress Headless

### Backend

- WordPress
- CMS para posts, páginas e categorias
- Painel administrativo
- Upload de mídia
- Gestão editorial
- API customizada para home

---

## Estrutura do projeto

```text
atlas-journal/
├── next_frontend/   # Aplicação pública em Next.js
└── wp_backend/      # WordPress como CMS / API
```

---

## Funcionalidades implementadas

- Home editorial modular
- Destaque principal
- Últimas notícias
- Sessão de vídeos
- Blocos por categoria
- Área de colunistas
- Página de artigo dinâmica
- Página de categoria com paginação
- Busca de posts
- Página institucional
- Integração WordPress Headless
- Consumo de endpoint customizado da home
- Fallback de conteúdo e imagens

---

## Arquitetura

O WordPress é responsável por:

- cadastro de conteúdo
- categorias
- tags
- páginas
- publicação
- gestão editorial

O Next.js é responsável por:

- renderização pública
- performance
- navegação moderna
- SEO
- experiência visual
- cache e revalidate

---

## Objetivo

Demonstrar uma arquitetura moderna utilizando **WordPress como backend de conteúdo** e **Next.js como camada de apresentação**, separando responsabilidades e aumentando performance.

---

## Status

Projeto funcional  
Integração real entre frontend e backend  

---

## Licença

Uso educacional e portfólio.
