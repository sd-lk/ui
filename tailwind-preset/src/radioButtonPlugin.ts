/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const radioButtonPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-radio': {
      '@apply w-6 h-6 appearance-none border-2 ui-ink rounded-full cursor-pointer relative': {},
      '&::before': {
        '@apply absolute left-1 top-1 right-1 bottom-1 transform scale-0 transition duration-100': {},
        backgroundColor: 'currentColor',
        borderRadius: 'inherit',
        content: '""',
      },
      '&:checked::before': {
        '@apply scale-100': {},
      },
    },
  })
})
