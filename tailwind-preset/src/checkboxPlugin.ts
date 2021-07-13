/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const checkboxPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-checkbox': {
      '@apply w-6 h-6 appearance-none border-2 ui-ink rounded cursor-pointer relative': {},
      '&::before': {
        '@apply absolute left-0.5 top-0.5 right-0.5 bottom-0.5 rounded-sm transform scale-0 transition duration-100': {},
        backgroundColor: 'currentColor',
        borderColor: 'currentColor',
        content: '""',
      },
      '&:checked::before': {
        '@apply scale-100': {},
      },
    },
  })
})
