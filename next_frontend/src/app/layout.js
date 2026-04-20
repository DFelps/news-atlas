import '@/styles/globals.scss';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site';

export const metadata = {
  title: `${siteConfig.name} | Portal editorial demo`,
  description: siteConfig.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
