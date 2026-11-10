import Header from './header';
import Footer from './footer';
import CtaBanner from './cta-banner';
import { type Locale } from '@/lib/content';

export default function PageShell({ locale, children, showCta = true }: { locale: Locale; children: React.ReactNode; showCta?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      {showCta && <CtaBanner locale={locale} />}
      <Footer locale={locale} />
    </div>
  );
}
