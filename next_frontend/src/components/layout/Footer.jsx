import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div>
          <h3>{siteConfig.name}</h3>
          <p>{siteConfig.description}</p>
        </div>

        <div className="site-footer__links">
          <Link href="/">Home</Link>
          <Link href="/historia">Nossa história</Link>
          <Link href="/categoria/brasil">Brasil</Link>
          <Link href="/categoria/saude">Saúde</Link>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© 2026 {siteConfig.name}. Projeto demo em Next.js + WordPress headless.</p>
        <div>
          <span>editorial</span>
          <span>vídeos</span>
          <span>cultura</span>
          <span>brasil</span>
        </div>
      </div>
    </footer>
  );
}
