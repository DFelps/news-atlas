const WP_URL = process.env.NEXT_PUBLIC_WP_URL || 'http://localhost:9003';
const API_BASE = `${WP_URL}/wp-json`;
const HOME_ENDPOINT = `${API_BASE}/atlas/v1/home`;

const PLACEHOLDER_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <rect width="1200" height="800" fill="#efe5d7"/>
    <rect x="80" y="80" width="1040" height="640" rx="24" fill="#fffdf9" stroke="#dccfbe" stroke-width="2"/>
    <text x="600" y="375" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="42" fill="#244c5a">
      News Atlas
    </text>
    <text x="600" y="430" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#6f6258">
      Imagem de demonstração
    </text>
  </svg>
`)}`;

function stripHtml(html = '') {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function decodeHtmlEntities(text = '') {
  if (typeof window !== 'undefined') {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function resolveImage(image) {
  if (!image) return PLACEHOLDER_IMAGE;
  return image;
}

function normalizeCustomPost(post) {
  if (!post) return null;

  return {
    id: post.id,
    slug: post.slug,
    title: decodeHtmlEntities(post.title || ''),
    excerpt: decodeHtmlEntities(post.excerpt || ''),
    content: post.content || '',
    image: resolveImage(post.featured_image),
    date: post.date,
    modified: post.modified,
    link: post.link,
    categoryId: post.category?.id ?? null,
    categorySlug: post.category?.slug ?? '',
    categoryName: post.category?.name ?? '',
    author: post.author?.name ?? 'Redação',
    authorSlug: post.author?.slug ?? '',
    authorAvatar: resolveImage(post.author?.avatar),
    authorBio: post.author?.bio ?? '',
    readingTime: post.reading_time ?? null,
    videoUrl: post.video_url ?? null
  };
}

function normalizeWpPost(post) {
  const featuredMedia = post?._embedded?.['wp:featuredmedia']?.[0];
  const author = post?._embedded?.author?.[0];
  const primaryCategory = post?._embedded?.['wp:term']?.[0]?.[0];

  return {
    id: post.id,
    slug: post.slug,
    title: decodeHtmlEntities(post.title?.rendered || ''),
    excerpt: decodeHtmlEntities(stripHtml(post.excerpt?.rendered || '')),
    content: post.content?.rendered || '',
    image: resolveImage(featuredMedia?.source_url),
    date: post.date,
    modified: post.modified,
    link: post.link,
    categoryId: primaryCategory?.id ?? null,
    categorySlug: primaryCategory?.slug ?? '',
    categoryName: primaryCategory?.name ?? '',
    author: author?.name ?? 'Redação',
    authorSlug: author?.slug ?? '',
    authorAvatar: resolveImage(author?.avatar_urls?.['96']),
    authorBio: author?.description ?? '',
    readingTime: null,
    videoUrl: null
  };
}

function normalizeCategory(category) {
  if (!category) return null;

  return {
    id: category.id,
    name: decodeHtmlEntities(category.name || ''),
    slug: category.slug,
    description: decodeHtmlEntities(category.description || '')
  };
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    next: { revalidate: 60 },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${url}: ${response.status}`);
  }

  return response.json();
}

async function fetchWpPosts(url) {
  const response = await fetch(url, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${url}: ${response.status}`);
  }

  const posts = await response.json();
  const totalPages = Number(response.headers.get('X-WP-TotalPages') || 1);
  const total = Number(response.headers.get('X-WP-Total') || posts.length || 0);

  return {
    posts: posts.map(normalizeWpPost),
    totalPages,
    total
  };
}

export async function getHomeData() {
  const home = await fetchJson(HOME_ENDPOINT);

  const featured = normalizeCustomPost(home?.sections?.featured);
  const latest = (home?.sections?.latest || []).map(normalizeCustomPost);
  const videos = (home?.sections?.videos || []).map(normalizeCustomPost);
  const funPosts = (home?.sections?.fun_category?.posts || []).map(normalizeCustomPost);
  const brazil = (home?.sections?.brazil?.posts || []).map(normalizeCustomPost);

  let columnists = (home?.sections?.columnists || []).map((columnist, index) => ({
    id: columnist.id || index + 1,
    name: columnist.name || columnist.post?.author?.name || 'Colunista',
    role: columnist.role || columnist.post?.category?.name || 'Colunista',
    image: resolveImage(columnist.image || columnist.post?.author?.avatar),
    post: normalizeCustomPost(columnist.post)
  }));

  if (!columnists.length) {
    const columnistCategory = await getCategoryPosts('colunistas', 1, 3).catch(() => null);

    if (columnistCategory?.posts?.length) {
      columnists = columnistCategory.posts.map((post) => ({
        id: post.id,
        name: post.author || 'Colunista',
        role: post.categoryName || 'Colunista',
        image: post.authorAvatar || PLACEHOLDER_IMAGE,
        post
      }));
    }
  }

  return {
    site: home?.site ?? null,
    featured,
    trending: latest.slice(1, 5),
    latestNews: latest.slice(0, 4),
    videos,
    health: {
      featured: funPosts[0] || null,
      list: funPosts.slice(1, 5)
    },
    columnists,
    brasil: brazil
  };
}

export async function getPostBySlug(slug) {
  const posts = await fetchJson(
    `${API_BASE}/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`
  );

  if (!posts.length) return null;

  return normalizeWpPost(posts[0]);
}

export async function getCategoryBySlug(slug) {
  const categories = await fetchJson(
    `${API_BASE}/wp/v2/categories?slug=${encodeURIComponent(slug)}`
  );

  if (!categories.length) return null;

  return normalizeCategory(categories[0]);
}

export async function getCategoryPosts(slug, page = 1, perPage = 10) {
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      category: null,
      posts: [],
      totalPages: 1,
      total: 0
    };
  }

  const { posts, totalPages, total } = await fetchWpPosts(
    `${API_BASE}/wp/v2/posts?categories=${category.id}&page=${page}&per_page=${perPage}&_embed`
  );

  return {
    category,
    posts,
    totalPages,
    total
  };
}

export async function getAllPosts(page = 1, perPage = 10) {
  return fetchWpPosts(`${API_BASE}/wp/v2/posts?page=${page}&per_page=${perPage}&_embed`);
}

export async function searchPosts(query, page = 1, perPage = 10) {
  const value = query?.trim();

  if (!value) {
    return {
      posts: [],
      totalPages: 1,
      total: 0
    };
  }

  return fetchWpPosts(
    `${API_BASE}/wp/v2/posts?search=${encodeURIComponent(value)}&page=${page}&per_page=${perPage}&_embed`
  );
}

