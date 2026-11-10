import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function RootPage() {
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language') ?? '';
  const prefersArabic = /^\s*ar\b/i.test(acceptLanguage);
  redirect(prefersArabic ? '/ar' : '/en');
}
