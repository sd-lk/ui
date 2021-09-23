/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const radioButtonPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-radio': {
      '@apply appearance-none border-2 ui-ink rounded-full cursor-pointer relative': {},
      height: '1.5rem',
      width: '1.5rem',
      minWidth: '1.5rem',
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
