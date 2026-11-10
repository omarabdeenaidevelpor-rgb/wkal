import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = content[params.locale];
  return { title: t.about.title, description: t.about.body[0] };
}

export default function AboutPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl">{t.about.title}</h1>
          <div className="mt-8 space-y-5 text-lg text-charcoal/75">
            {t.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-white/40 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl">{t.about.valuesTitle}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.about.values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-charcoal/10 bg-ivory p-7">
                <h3 className="text-xl font-semibold text-gold">{v.title}</h3>
                <p className="mt-3 text-sm text-charcoal/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
