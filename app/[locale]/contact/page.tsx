import type { Metadata } from 'next';
import { Mail, MessageCircle, Facebook, Phone } from 'lucide-react';
import PageShell from '@/components/page-shell';
import ContactForm from '@/components/contact-form';
import { content, isLocale } from '@/lib/content';
import { notFound } from 'next/navigation';

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  if (!isLocale(params.locale)) return {};
  const t = content[params.locale];
  return { title: t.contact.title, description: t.contact.body };
}

export default function ContactPage({ params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = content[locale];
  const email = process.env.CONTACT_EMAIL || 'hello@waraqandhekaya.com';

  return (
    <PageShell locale={locale}>
      <section className="px-5 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl">{t.contact.title}</h1>
            <p className="mt-5 text-lg text-charcoal/75">{t.contact.body}</p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white/40 p-5 transition-colors hover:border-gold"
              >
                <Mail className="text-gold" size={22} />
                <div>
                  <p className="text-sm font-medium">{t.contact.emailLabel}</p>
                  <p className="text-sm text-charcoal/70">{email}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/201008338490`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white/40 p-5 transition-colors hover:border-gold"
              >
                <MessageCircle className="text-gold" size={22} />
                <div>
                  <p className="text-sm font-medium">{t.contact.whatsappLabel}</p>
                  <p className="text-sm text-charcoal/70">{t.contact.phoneNumber}</p>
                </div>
              </a>
              <a
                href={t.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white/40 p-5 transition-colors hover:border-gold"
              >
                <Facebook className="text-gold" size={22} />
                <div>
                  <p className="text-sm font-medium">Facebook</p>
                  <p className="text-sm text-charcoal/70">Waraq & Hekaya</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-charcoal/10 bg-white/40 p-7 md:p-9">
            <h2 className="text-2xl font-semibold">{t.contact.formTitle}</h2>
            <p className="mt-2 text-sm text-charcoal/70">{t.contact.formBody}</p>
            <div className="mt-7">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
