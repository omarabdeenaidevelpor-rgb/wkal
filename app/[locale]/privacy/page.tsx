import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  return { title: content[params.locale].privacy.title };
}

export default function PrivacyPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl">{t.privacy.title}</h1>
          <div className="mt-8 space-y-5 text-charcoal/75">
            {t.privacy.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
