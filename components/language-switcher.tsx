'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale } from '@/lib/content';

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other: Locale = locale === 'en' ? 'ar' : 'en';
  const otherPath = pathname.replace(/^\/(en|ar)/, `/${other}`);

  return (
    <Link
      href={otherPath}
      className="rounded-full border border-charcoal/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-charcoal transition-colors hover:border-gold hover:text-gold"
      lang={other}
    >
      {other === 'en' ? 'EN' : 'عربي'}
    </Link>
  );
}
