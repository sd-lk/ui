/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const entypoPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-entypo': {
      '@apply fill-current h-5 w-5': {},
    },
  })
})
