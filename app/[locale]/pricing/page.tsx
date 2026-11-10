import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = content[params.locale];
  return { title: t.pricing.title, description: t.pricing.body };
}

export default function PricingPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl">{t.pricing.title}</h1>
            <p className="mt-4 text-charcoal/70">{t.pricing.body}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.featured ? 'border-gold bg-charcoal text-ivory shadow-soft' : 'border-charcoal/10 bg-white/40'
                }`}
              >
                <h2 className={`text-xl font-semibold ${plan.featured ? 'text-gold' : ''}`}>{plan.name}</h2>
                <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
                <p className={`mt-1 text-sm ${plan.featured ? 'text-ivory/60' : 'text-charcoal/60'}`}>{plan.period}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={`mt-1 ${plan.featured ? 'text-gold' : 'text-gold'}`}>•</span>
                      <span className={plan.featured ? 'text-ivory/80' : 'text-charcoal/75'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/quote`}
                  className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-medium transition-colors ${
                    plan.featured ? 'bg-gold text-charcoal hover:bg-ivory' : 'bg-charcoal text-ivory hover:bg-gold'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
