/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const basePlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-disabled': {
      '@apply pointer-events-none opacity-50': {},
    },
  })
})
