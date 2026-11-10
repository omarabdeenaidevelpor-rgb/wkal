import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Phone } from 'lucide-react';
import { content, type Locale } from '@/lib/content';
export default function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-semibold">{t.brand.short}</p>
          <p className="mt-3 max-w-sm text-sm text-ivory/70">{t.footer.blurb}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">{t.footer.servicesLabel}</h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            {t.services.map((s) => (
              <li key={s.id}>
                <Link href={s.href} className="transition-colors hover:text-ivory">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">{t.footer.companyLabel}</h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li><Link href={`/${locale}/about`} className="transition-colors hover:text-ivory">{t.nav[1].label}</Link></li>
            <li><Link href={`/${locale}/portfolio`} className="transition-colors hover:text-ivory">{t.nav[3].label}</Link></li>
            <li><Link href={`/${locale}/pricing`} className="transition-colors hover:text-ivory">{t.nav[4].label}</Link></li>
            <li><Link href={`/${locale}/contact`} className="transition-colors hover:text-ivory">{t.nav[6].label}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">{t.contact.title}</h3>
          <ul className="mt-4 space-y-2 text-sm text-ivory/70">
            <li>
              <Link
                href={`https://wa.me/201008338490`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                {t.contact.whatsappLabel} {t.contact.phoneNumber}
              </Link>
            </li>
            <li>
              <Link
                href={t.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-ivory transition-colors"
              >
                <Facebook className="w-5 h-5 shrink-0" />
                Facebook
              </Link>
            </li>
            <li>
              <Link href={`mailto:hello@waraqandhekaya.com`} className="transition-colors hover:text-ivory">
                {t.contact.emailLabel}: hello@waraqandhekaya.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-5 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-ivory/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {t.brand.short}. {t.footer.rights}</p>
          <div className="flex gap-5">
            <Link href={`/${locale}/privacy`} className="transition-colors hover:text-ivory">{t.privacy.title}</Link>
            <Link href={`/${locale}/terms`} className="transition-colors hover:text-ivory">{t.terms.title}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
