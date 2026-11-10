'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Facebook } from 'lucide-react';
import { useState } from 'react';
import { content, type Locale } from '@/lib/content';
import LanguageSwitcher from './language-switcher';

export default function Header({ locale }: { locale: Locale }) {
  const t = content[locale];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href={`/${locale}`} className="font-display text-xl font-semibold tracking-tight">
          {t.brand.short}
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-charcoal/80 md:flex" aria-label="Primary">
          {t.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <div className="hidden sm:flex items-center gap-2">
            <Link
              href={`https://wa.me/201008338490`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-charcoal px-3 py-1.5 text-sm font-medium text-ivory transition-colors hover:bg-gold"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="shrink-0"
              />
              {t.contact.whatsappLabel}
            </Link>
            <Link
              href={t.contact.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-charcoal/20 px-3 py-1.5 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="w-4 h-4 shrink-0" />
            </Link>
          </div>
          <Link
            href={`/${locale}/quote`}
            className="hidden rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-gold md:inline-block"
          >
            {t.home.heroCta}
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-charcoal md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-charcoal/10 bg-ivory px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-4 text-base font-medium">
            {t.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1 hover:text-gold">
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <Link
                href={`https://wa.me/201008338490`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal hover:text-gold"
              >
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="shrink-0" />
                {t.contact.whatsappLabel} {t.contact.phoneNumber}
              </Link>
              <Link
                href={t.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal hover:text-gold"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </Link>
            </div>
            <Link href={`/${locale}/quote`} onClick={() => setOpen(false)} className="rounded-full bg-charcoal px-5 py-2.5 text-center text-sm font-medium text-ivory">
              {t.home.heroCta}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
