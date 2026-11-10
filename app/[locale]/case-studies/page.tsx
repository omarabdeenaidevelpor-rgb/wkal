import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = content[params.locale];
  return { title: t.caseStudies.title, description: t.caseStudies.body };
}

export default function CaseStudiesPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl">{t.caseStudies.title}</h1>
          <p className="mt-5 text-lg text-charcoal/75">{t.caseStudies.body}</p>
          <p className="mt-10 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5 text-sm text-charcoal/75">
            {t.caseStudies.note}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
