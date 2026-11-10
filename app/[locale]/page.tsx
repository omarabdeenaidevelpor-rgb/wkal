import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = content[params.locale];
  return {
    title: t.brand.full,
    description: t.home.heroSubtitle,
    openGraph: { title: t.brand.full, description: t.home.heroSubtitle, locale: params.locale === 'ar' ? 'ar_EG' : 'en_US' }
  };
}

export default function HomePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      {/* Hero */}
      <section className="px-5 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{t.tagline}</p>
          <h1 className="mt-5 text-4xl leading-tight md:text-6xl">{t.home.heroTitle}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal/70">{t.home.heroSubtitle}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href={`/${locale}/quote`} className="rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-gold">
              {t.home.heroCta}
            </Link>
            <Link href={`/${locale}/services`} className="rounded-full border border-charcoal/25 px-7 py-3 text-sm font-medium transition-colors hover:border-gold hover:text-gold">
              {t.home.heroCtaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-charcoal/10 bg-white/40 px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <h2 className="text-3xl md:text-4xl">{t.home.introTitle}</h2>
          <p className="text-lg text-charcoal/70">{t.home.introBody}</p>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl">{t.home.servicesTitle}</h2>
            <p className="mt-3 text-charcoal/70">{t.home.servicesBody}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((s) => (
              <Link key={s.id} href={s.href} className="group rounded-2xl border border-charcoal/10 bg-white/40 p-7 transition-all hover:border-gold hover:shadow-soft">
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-gold">{s.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{s.tagline}</p>
                <p className="mt-4 text-sm font-medium text-gold">→</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-charcoal px-5 py-16 text-ivory md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl">{t.home.approachTitle}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.home.approachItems.map((item, i) => (
              <div key={i} className="border-t border-ivory/20 pt-6">
                <p className="text-sm font-semibold text-gold">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-ivory/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">{t.home.contactTitle}</h2>
          <p className="mt-4 text-charcoal/70">{t.home.contactBody}</p>
          <Link href={`/${locale}/contact`} className="mt-8 inline-block rounded-full border border-charcoal/25 px-7 py-3 text-sm font-medium transition-colors hover:border-gold hover:text-gold">
            {t.home.contactCta}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
