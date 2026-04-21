'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/lib/site';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Brasil', href: '/categoria/brasil' },
  { label: 'Saúde', href: '/categoria/saude' },
  { label: 'Vídeos', href: '/categoria/videos' },
  { label: 'Colunistas', href: '/categoria/colunistas' },
  { label: 'Nossa história', href: '/historia' }
];

export function Header() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const value = query.trim();

    if (!value) return;

    router.push(`/busca?q=${encodeURIComponent(value)}`);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-brand">
          <span className="site-brand__mark">AJ</span>
          <div>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.tagline}</small>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <form className="search-form" onSubmit={handleSubmit} role="search">
          <input
            type="search"
            name="q"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar notícias..."
            aria-label="Buscar notícias"
          />
          <button className="search-button" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}