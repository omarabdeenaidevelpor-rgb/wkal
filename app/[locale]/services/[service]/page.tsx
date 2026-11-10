import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string; service: string } };

export function generateStaticParams() {
  return ['en', 'ar'].flatMap((locale) =>
    content[locale as 'en' | 'ar'].services.map((s) => ({ locale, service: s.id }))
  );
}

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const service = content[params.locale].services.find((s) => s.id === params.service);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default function ServicePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];
  const service = t.services.find((s) => s.id === params.service);
  if (!service) notFound();

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <Link href={`/${locale}/services`} className="text-sm font-medium text-gold hover:underline">
            ← {t.home.servicesTitle}
          </Link>
          <h1 className="mt-4 text-4xl md:text-5xl">{service.title}</h1>
          <p className="mt-4 text-lg font-medium text-gold">{service.tagline}</p>
          <p className="mt-6 text-lg text-charcoal/75">{service.description}</p>

          <div className="mt-10 rounded-2xl border border-charcoal/10 bg-white/40 p-8">
            <h2 className="text-xl font-semibold">{t.quote.formTitle}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-charcoal/75">
                  <span className="mt-1 text-gold">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={`/${locale}/quote`} className="rounded-full bg-charcoal px-7 py-3 text-sm font-medium text-ivory transition-colors hover:bg-gold">
              {t.home.heroCta}
            </Link>
            <Link href={`/${locale}/contact`} className="rounded-full border border-charcoal/25 px-7 py-3 text-sm font-medium transition-colors hover:border-gold hover:text-gold">
              {t.home.contactCta}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
