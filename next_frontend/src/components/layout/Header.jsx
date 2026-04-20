import Link from 'next/link';
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

        <button className="search-button" type="button" aria-label="Buscar">
          Buscar
        </button>
      </div>
    </header>
  );
}
