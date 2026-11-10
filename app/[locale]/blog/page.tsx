import type { Metadata } from 'next';
import PageShell from '@/components/page-shell';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = content[params.locale];
  return { title: t.blog.title, description: t.blog.body };
}

export default function BlogPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h1 className="text-4xl md:text-5xl">{t.blog.title}</h1>
            <p className="mt-4 text-charcoal/70">{t.blog.body}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.blog.posts.map((post, i) => (
              <article key={i} className="rounded-2xl border border-charcoal/10 bg-white/40 p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{post.date}</p>
                <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
                <p className="mt-3 text-sm text-charcoal/70">{post.excerpt}</p>
              </article>
            ))}
          </div>

          <p className="mt-12 rounded-2xl border border-gold/40 bg-gold/10 px-6 py-5 text-sm text-charcoal/75">
            {t.blog.note}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
