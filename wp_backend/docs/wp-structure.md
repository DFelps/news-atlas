# Estrutura Atual do WordPress Headless — Atlas Journal

## Visão Geral

Projeto editorial em arquitetura **Headless CMS**, utilizando:

- **WordPress** como backend de conteúdo
- **Next.js** como frontend público
- **Sass (SCSS)** para estilização
- **REST API** + endpoint customizado para home

O WordPress administra posts, categorias, páginas e publicação.  
O Next.js renderiza a interface pública com foco em performance, organização visual e cache.

---

## Conteúdos Utilizados

### Post Type Principal

- `post`

### Taxonomias

- `category`
- `post_tag`

### Páginas

- `nossa-historia`

---

## Categorias Atuais

- Brasil
- Saúde
- Vídeos
- Colunistas

---

## Campos Extras Utilizados / Recomendados

### Para Posts

- `featured_home` (boolean)
- `video_url` (texto)
- `columnist_highlight` (boolean)
- `cover_subtitle` (texto curto opcional)

---

## API Atual do Projeto

### Endpoint customizado da Home

```text
/wp-json/atlas/v1/home
```

Responsável por entregar:

- destaque principal
- últimas notícias
- vídeos
- saúde e bem-estar
- colunistas
- brasil
- dados institucionais do site

### REST API padrão

```text
/wp-json/wp/v2/posts
/wp-json/wp/v2/categories
/wp-json/wp/v2/pages
/wp-json/wp/v2/users
```

Usado para:

- página de post individual
- páginas de categoria
- busca
- paginação

---

## Lógica Atual da Home

### Destaque

Último post marcado ou primeiro resultado editorial.

### Últimas notícias

Posts mais recentes.

### Vídeos

Posts com `video_url` preenchido.

### Saúde e Bem-estar

Últimos posts da categoria `saude`.

### Colunistas

Posts da categoria `colunistas`
ou autores definidos.

### Brasil

Últimos posts da categoria `brasil`.

---

## Integração no Next.js

Arquivo principal:

```text
src/lib/data.js
```

Responsável por:

- buscar dados do WordPress
- normalizar retorno da API
- fallback de imagens
- homeData dinâmico
- posts por slug
- categoria paginada
- busca

---

## Fluxo Atual do Projeto

1. WordPress publica conteúdo
2. API entrega dados
3. Next.js consome endpoints
4. Frontend renderiza páginas
5. Cache / revalidate reduz carga no backend

---

## Estrutura do Repositório

```text
news-atlas/
├── next_frontend/
└── wp_backend/
```

---

## Status

Projeto funcional em integração real entre Next.js + WordPress Headless.

---

## Próximos Passos

- screenshots para README
- refinamento visual
- SEO avançado
- webhook de revalidate
- deploy produção
- cache Redis / CDN
