'use client';

import React from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Button, Box } from '@mui/material';
import { Language } from '@mui/icons-material';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Language sx={{ mr: 1 }} />
      <Button
        variant={locale === 'en' ? 'contained' : 'outlined'}
        size="small"
        onClick={() => switchLocale('en')}
        sx={{ minWidth: '60px' }}
      >
        EN
      </Button>
      <Button
        variant={locale === 'rs' ? 'contained' : 'outlined'}
        size="small"
        onClick={() => switchLocale('rs')}
        sx={{ minWidth: '60px' }}
      >
        RS
      </Button>
    </Box>
  );
}
