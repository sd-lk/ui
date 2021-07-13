/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const switchPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-switch': {
      '@apply appearance-none relative transition duration-300 rounded-full cursor-pointer ui-paper-3': {},
      height: '1.5rem',
      width: '2.25rem',
      '&::before': {
        '@apply bg-paper shadow absolute block transition-transform duration-300': {},
        content: '""',
        height: 'calc(1.5rem - 2px)',
        width: 'calc(1.5rem - 2px)',
        top: 1,
        left: 1,
        borderRadius: 'inherit',
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(0.75rem)',
          right: 1,
        },
      },
    },
    '.ui-switch-small': {
      '@apply ui-switch': {},
      height: '1rem',
      width: '1.75rem',
      '&::before': {
        '@apply ui-paper shadow absolute block transition-transform duration-300': {},
        content: '""',
        height: 'calc(1rem - 2px)',
        width: 'calc(1rem - 2px)',
        top: 1,
        left: 1,
        borderRadius: 'inherit',
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(0.75rem)',
          right: 1,
        },
      },
    },
    '.ui-switch-big': {
      '@apply ui-switch': {},
      height: '2rem',
      width: '3rem',
      '&::before': {
        '@apply ui-paper shadow absolute block transition-transform duration-300': {},
        content: '""',
        height: 'calc(2rem - 2px)',
        width: 'calc(2rem - 2px)',
        top: 1,
        left: 1,
        borderRadius: 'inherit',
      },
      '&:checked': {
        '&::before': {
          transform: 'translateX(1rem)',
          right: 1,
        },
      },
    },
  })
})
