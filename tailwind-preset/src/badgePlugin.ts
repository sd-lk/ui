/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const badgePlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-badge': {
      '@apply px-2 rounded-full inline-block ui-text-button': {},
    },
  })
})
