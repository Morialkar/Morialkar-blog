import { defineEcConfig } from 'astro-expressive-code';

export default defineEcConfig({
  themes: ['github-light', 'dracula'],
  frames: {
    showCopyToClipboardButton: true,
  },
  styleOverrides: {
    borderRadius: '1rem',
    frames: {
      border: '1px solid rgba(230, 0, 126, 0.18)',
      shadowColor: 'rgba(42, 10, 46, 0.16)',
      inlineButtonBackground: 'rgba(230, 0, 126, 0.12)',
    },
  },
});
