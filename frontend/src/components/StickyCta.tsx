'use client';

import { useTheme } from '@mui/material';
import { useLocale } from 'next-intl';

export default function StickyCta() {
  useTheme();
  useLocale();
  return null;
}
