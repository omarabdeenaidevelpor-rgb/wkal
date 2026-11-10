import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import QuoteForm from '@/components/quote-form';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = content[params.locale];
  return { title: t.quote.title, description: t.quote.body };
}

export default function QuotePage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl">{t.quote.title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/75">{t.quote.body}</p>
          </div>

          <div className="mt-12 rounded-3xl border border-charcoal/10 bg-white/40 p-7 md:p-10">
            <h2 className="text-2xl font-semibold">{t.quote.formTitle}</h2>
            <p className="mt-2 text-sm text-charcoal/70">{t.quote.formBody}</p>
            <div className="mt-7">
              <QuoteForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
