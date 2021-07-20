/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const textAreaPlugin = plugin(function ({ addBase }) {
  addBase({
    '.ui-textarea': {
      '@apply relative flex flex-col-reverse text-ink dark:text-ink-dark': {},
      '& textarea': {
        '@apply block box-border appearance-none outline-none rounded bg-paper-2 dark:bg-paper-2-dark w-full px-4 py-2': {},
        '-webkit-tap-highlight-color': 'transparent',
        '&:invalid ~ .ui-textarea__label .ui-textarea__label--error-bullet': {
          '@apply inline ui-ink-error': {},
        },
        '&::placeholder': {
          color: 'inherit',
          opacity: 0.4,
        },
      },
      '&.ui-textarea--fancy': {
        '&::before, &::after': {
          '@apply absolute pointer-events-none block bottom-0 left-0 right-0': {},
          content: '""',
          height: '1px',
          opacity: 0.32,
          zIndex: 2,
          backgroundColor: 'currentColor',
        },
        '&::after': {
          opacity: 1,
          height: '2px',
          transform: 'scaleX(0)',
          transition: 'transform 0.48s ease',
        },
        '&:focus-within::after': {
          transform: 'scaleX(1)',
        },
        '& textarea': {
          '@apply rounded-b-none px-0 resize-none': {},
          backgroundColor: 'transparent',
        },
        '& .ui-textarea__label': {
          '@apply px-0': {},
        },
      },
      '& .ui-textarea__label--error-bullet': {
        '@apply hidden ml-1': {},
      },
      '&.ui-textarea--filled, &:focus-within': {
        '& .ui-textarea__label': {
          'font-size': '0.64rem',
          transform: 'translateY(0%)',
        },
      },
    },
    '.ui-textarea__label': {
      '@apply block truncate py-0 select-none leading-6 px-4': {},
      transition: 'font 0.32s ease, transform 0.32s ease',
      transform: 'translateY(2rem)',
    },
  })
})
