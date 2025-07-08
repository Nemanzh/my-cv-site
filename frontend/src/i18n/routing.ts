import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'sr', 'sr-Cyrl'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Hide the default locale from the URL
  localePrefix: {
    mode: 'as-needed',
  },
});

// Create navigation helpers
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
