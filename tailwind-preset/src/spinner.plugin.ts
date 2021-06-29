/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const spinnerPlugin = plugin(({ addBase }) => {
  addBase({
    '.ui-spinner': {
      '@apply rounded-full border-2 w-6 h-6 animate-spinner ui-ink': {},
      borderLeftColor: 'transparent !important',
      borderRightColor: 'transparent !important',
    },
  })
})
