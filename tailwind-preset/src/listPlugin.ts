/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const listPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-list': {
      '@apply px-0 py-2 m-0': {},
    },
    '.ui-list-header': {
      '@apply text-sm opacity-60 px-4 py-2 mb-2 block': {},
    },
    '.ui-list-item': {
      '@apply px-4 py-2 m-0 block': {},
    },
    '.ui-list-group': {
      '@apply flex items-center py-2 m-0': {},
    },
    '.ui-list-text': {
      '@apply px-4 flex-1': {},
    },
    '.ui-list-icon': {
      marginLeft: 'calc(1rem + 2px)',
      marginRight: 'calc(1rem + 2px)',
    },
  })
})
