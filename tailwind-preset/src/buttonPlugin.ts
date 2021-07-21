/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const buttonPlugin = plugin(function ({ addBase, addComponents }) {
  addComponents({
    '.ui-button-text': {
      '@apply text-sm font-medium leading-6': {},
    },
  })
  addBase({
    '.ui-button': {
      '@apply px-4 h-10 rounded ui-button-text leading-6 flex gap-2 items-center justify-center relative': {},
      transition: 'filter',
      '&:before': {
        '@apply absolute top-0 left-0 right-0 bottom-0 opacity-0 transition duration-150': {},
        content: '""',
        backgroundColor: 'currentColor',
        borderRadius: 'inherit',
      },
      '&:hover::before': {
        opacity: 0.08,
      },
      '&:active::before': {
        opacity: 0.16,
      },
      '&:disabled': {
        '@apply ui-disabled': {},
      },
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
