/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const scrollBoxPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.ui-scroll-box': {
      overflow: 'hidden',
      'scroll-behavior': 'smooth',
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
      '-webkit-overflow-scrolling': 'touch',
    },
    '.ui-scroll-box::-webkit-scrollbar': {
      display: 'none',
    },
    '.ui-scroll-box-x': {
      '@apply ui-scroll-box': {},
      display: 'flex',
      justifyContent: 'flex-start',
      'overflow-x': 'scroll',
    },
    '.ui-scroll-box-y': {
      '@apply ui-scroll-box': {},
      'overflow-y': 'scroll',
    },
  })
})