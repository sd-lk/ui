/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const buttonPlugin = plugin(function ({ addBase, addComponents }) {
  addComponents({
    '.ui-text-button': {
      '@apply text-sm font-medium leading-6': {},
    },
  })
  addBase({
    '.ui-button': {
      '@apply py-2 px-4 rounded ui-text-button leading-6 flex gap-2 items-center justify-center relative filter active:brightness-90 hover:brightness-95 transition duration-150': {},
    },
    '.ui-button--busy': {
      'pointer-events': 'none',
      '& > :first-child': {
        visibility: 'hidden',
        display: 'inherit',
        gap: 'inherit',
        flexDirection: 'inherit',
      },
      '& > :last-child': {
        '@apply visible absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2': {},
      },
    },
  })
})
