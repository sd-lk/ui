/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const menuPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-menu': {
      '@apply ui-list': {},
    },
    '.ui-menu-header': {
      '@apply ui-list-header': {},
    },
    '.ui-menu-item': {
      '@apply ui-list-item w-full text-left relative cursor-pointer': {},
      '&:before': {
        '@apply absolute top-0 left-0 right-0 bottom-0 opacity-0 transition duration-150': {},
        content: '""',
        backgroundColor: 'currentColor',
        borderRadius: 'inherit',
      },
      '&:hover::before': {
        opacity: 0.04,
      },
      '&:active::before': {
        opacity: 0.8,
      },
      '&:disabled': {
        '@apply ui-disabled': {},
      },
    },
    '.ui-menu-group': {
      '@apply ui-list-group w-full text-left relative cursor-pointer': {},
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
    '.ui-menu-text': {
      '@apply ui-list-text': {},
    },
    '.ui-menu-icon': {
      '@apply ui-list-icon': {},
    },
  })
})
