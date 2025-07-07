'use client';

import React from 'react';
import { useTheme } from '@mui/material/styles';

interface HighlightedTextProps {
  text: string;
  highlightIndices?: number[];
  highlightColor?: string;
  className?: string;
  component?: React.ElementType;
}

export default function HighlightedText({
  text,
  highlightIndices = [],
  highlightColor,
  className,
  component: Component = 'span',
}: HighlightedTextProps) {
  const theme = useTheme();
  const defaultHighlightColor = highlightColor || theme.palette.terminal.cyan;

  return (
    <Component className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            color: highlightIndices.includes(index)
              ? defaultHighlightColor
              : 'inherit',
          }}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}

// Helper function to auto-highlight first letters of words
export function highlightFirstLetters(text: string): number[] {
  const indices: number[] = [];
  let isFirstLetter = true;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // Treat spaces and special characters as word separators
    if (
      char === ' ' ||
      char === '&' ||
      char === '+' ||
      char === '-' ||
      char === '|'
    ) {
      isFirstLetter = true;
    } else if (isFirstLetter && char !== ' ') {
      indices.push(i);
      isFirstLetter = false;
    }
  }

  // Always highlight the very first character if it's not a space
  if (text.length > 0 && text[0] !== ' ') {
    indices.push(0);
  }

  return [...new Set(indices)]; // Remove duplicates
}

// Helper function specifically for highlighting first letters AND the && symbols
export function highlightFirstLettersAndSymbols(text: string): number[] {
  const indices: number[] = [];
  let isFirstLetter = true;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // Highlight & symbols
    if (char === '&') {
      indices.push(i);
      isFirstLetter = true;
    }
    // Treat spaces as word separators
    else if (char === ' ') {
      isFirstLetter = true;
    }
    // Highlight first letters of words
    else if (isFirstLetter && char !== ' ') {
      indices.push(i);
      isFirstLetter = false;
    }
  }

  return [...new Set(indices)]; // Remove duplicates
}
