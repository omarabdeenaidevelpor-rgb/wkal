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
    title: t.home.servicesTitle,
    description: t.home.servicesBody,
    openGraph: { title: t.home.servicesTitle, description: t.home.servicesBody, locale: params.locale === 'ar' ? 'ar_EG' : 'en_US' }
  };
}

export default function ServicesPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl">{t.home.servicesTitle}</h1>
            <p className="mx-auto mt-4 max-w-xl text-charcoal/70">{t.home.servicesBody}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {t.services.map((s) => (
              <Link key={s.id} href={s.href} className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white/40 p-8 transition-all hover:border-gold hover:shadow-soft">
                <h2 className="text-2xl font-semibold group-hover:text-gold">{s.title}</h2>
                <p className="mt-2 text-sm font-medium text-gold">{s.tagline}</p>
                <p className="mt-4 flex-1 text-sm text-charcoal/70">{s.description}</p>
                <p className="mt-6 text-sm font-medium text-gold">→</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
