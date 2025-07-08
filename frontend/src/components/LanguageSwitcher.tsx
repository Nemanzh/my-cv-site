'use client';

import React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

const languages = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    short: 'EN',
  },
  sr: {
    name: 'Srpski',
    flag: '🇷🇸',
    short: 'SR',
  },
  'sr-Cyrl': {
    name: 'Српски',
    flag: '🇷🇸',
    short: 'СР',
  },
} as const;

export default function LanguageSwitcher() {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
    handleClose();
  };

  const currentLanguage = languages[locale as keyof typeof languages];

  return (
    <Box>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          backgroundColor: theme.palette.terminal.header,
          border: `1px solid ${theme.palette.terminal.border}`,
          borderRadius: 1,
          color: theme.palette.terminal.text,
          minWidth: { xs: '44px', sm: '56px' },
          height: { xs: '36px', sm: '40px' },
          '&:hover': {
            backgroundColor: theme.palette.terminal.border,
          },
          '&:focus': {
            outline: `2px solid ${theme.palette.terminal.cyan}`,
            outlineOffset: '2px',
          },
        }}
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-label="Change language"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          <Typography
            component="span"
            className="terminal-mono"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {currentLanguage.flag}
          </Typography>
          <Typography
            component="span"
            className="terminal-mono"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              fontWeight: 'bold',
            }}
          >
            {currentLanguage.short}
          </Typography>
          <LanguageIcon
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' },
              opacity: 0.7,
            }}
          />
        </Box>
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
          sx: {
            py: 0.5,
          },
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: theme.palette.terminal.header,
              border: `1px solid ${theme.palette.terminal.border}`,
              borderRadius: 1,
              mt: 1,
              minWidth: 120,
              maxWidth: 160,
              overflow: 'hidden',
              '& .MuiMenuItem-root': {
                fontSize: { xs: '0.875rem', sm: '1rem' },
                py: 1,
                px: 1.5,
              },
            },
          },
          root: {
            sx: {
              '& .MuiBackdrop-root': {
                backgroundColor: 'transparent',
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        disableScrollLock={true}
        disableRestoreFocus={true}
        disableAutoFocus={true}
      >
        {routing.locales.map((localeOption: string) => {
          const language = languages[localeOption as keyof typeof languages];
          const isActive = localeOption === locale;

          return (
            <MenuItem
              key={localeOption}
              onClick={() => handleLanguageChange(localeOption)}
              disabled={isActive}
              className="terminal-mono"
              sx={{
                color: isActive
                  ? theme.palette.terminal.cyan
                  : theme.palette.terminal.text,
                backgroundColor: isActive
                  ? theme.palette.terminal.border
                  : 'transparent',
                '&:hover': {
                  backgroundColor: !isActive
                    ? theme.palette.terminal.border
                    : undefined,
                },
                '&.Mui-disabled': {
                  color: theme.palette.terminal.cyan,
                  opacity: 1,
                },
                gap: 1,
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography component="span" sx={{ fontSize: '1rem' }}>
                  {language.flag}
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                  }}
                >
                  {language.name}
                </Typography>
              </Box>
              {isActive && (
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.terminal.green,
                    fontSize: '0.75rem',
                  }}
                >
                  ✓
                </Typography>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
