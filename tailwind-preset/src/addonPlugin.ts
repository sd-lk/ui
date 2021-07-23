/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const addonPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-addon': {
      '@apply mx-4 flex items-center justify-center': {},
      minHeight: '1.5rem',
      minWidth: '1.5rem',
    },
  })
})
