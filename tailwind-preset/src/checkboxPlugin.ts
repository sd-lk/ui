/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const checkboxPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-checkbox': {
      '@apply appearance-none border-2 ui-ink rounded cursor-pointer relative': {},
      height: '1.5rem',
      width: '1.5rem',
      minWidth: '1.5rem',
      '&::before': {
        '@apply absolute left-0.5 top-0.5 right-0.5 bottom-0.5 rounded-sm transform scale-0 transition duration-100': {},
        backgroundColor: 'currentColor',
        content: '""',
      },
      '&:checked::before': {
        '@apply scale-100': {},
      },
    },
  })
})
