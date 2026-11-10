import Link from 'next/link';
import { content, type Locale } from '@/lib/content';

export default function CtaBanner({ locale }: { locale: Locale }) {
  const t = content[locale].cta;

  return (
    <section className="bg-gold px-5 py-14 text-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl md:text-4xl">{t.title}</h2>
        <p className="max-w-xl text-charcoal/80">{t.body}</p>
        <Link href={`/${locale}/quote`} className="rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-ink">
          {t.label}
        </Link>
      </div>
    </section>
  );
}
