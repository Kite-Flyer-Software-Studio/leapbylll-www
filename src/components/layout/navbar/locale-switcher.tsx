"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { IconWorld } from '@tabler/icons-react';

type Locale = 'en' | 'zh-HK';

const locales: { value: Locale; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'zh-HK', label: '繁' },
];

export const LocaleSwitcher = ({ className }: { className?: string }) => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleToggleLocale = () => {
    // Toggle between the two locales
    const newLocale = locale === 'en' ? 'zh-HK' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  const currentLocale = locales.find(l => l.value === locale);
  const nextLocale = locales.find(l => l.value !== locale);

  return (
    <button
      onClick={handleToggleLocale}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full transition-all cursor-pointer z-30",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800",
        "text-neutral-600 dark:text-neutral-300",
        "active:scale-95",
        className
      )}
      title={`Switch to ${nextLocale?.label}`}
      type="button"
    >
      <IconWorld className="size-5 pointer-events-none" />
      <span className="text-sm font-medium hidden sm:inline pointer-events-none">
        {nextLocale?.label}
      </span>
    </button>
  );
};
