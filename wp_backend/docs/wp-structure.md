# Estrutura sugerida do WordPress Headless

## Conteúdos

### Post type principal
- post

### Taxonomias
- category
- post_tag

### Páginas
- nossa-historia

## Campos extras recomendados

### Para posts
- featured_home (boolean)
- video_url (texto)
- columnist_highlight (boolean)
- cover_subtitle (texto curto, opcional)

## Blocos da home via API

### Destaque
- último post com featured_home = true

### Últimas notícias
- últimos posts publicados

### Vídeos
- posts com video_url preenchido

### Saúde e bem-estar
- últimos posts da categoria `saude`

### Colunistas
- posts de autores específicos ou categoria `colunistas`

### Brasil
- últimos posts da categoria `brasil`

## Endpoints possíveis

### REST API padrão
- /wp-json/wp/v2/posts
- /wp-json/wp/v2/categories
- /wp-json/wp/v2/pages
- /wp-json/wp/v2/users

### Com campos customizados
- ACF REST ligado
- ou endpoint custom no functions.php / plugin leve

## Estratégia prática

1. Subir frontend com mocks
2. Estruturar WP
3. Mapear endpoints por seção
4. Trocar `src/lib/data.js` por funções de fetch
5. Adicionar loading, fallback e revalidate
