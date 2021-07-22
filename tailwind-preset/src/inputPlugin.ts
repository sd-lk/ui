/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const inputPlugin = plugin(function ({ addBase }) {
  addBase(
    {
      '.ui-input': {
        '@apply flex items-center cursor-text relative rounded bg-paper-2 dark:bg-paper-2-dark h-12 text-ink dark:text-ink-dark': {},
        '& > .ui-input__wrapper': {
          '@apply flex flex-1 items-center min-w-0 overflow-hidden px-4 relative self-stretch': {},
          borderRadius: 'inherit',
        },
        '&.ui-input--disabled': {
          '@apply ui-disabled': {},
        },
        '&.ui-input--fancy': {
          '@apply rounded-b-none': {},
          backgroundColor: 'transparent',
          '& > .ui-input__wrapper': {
            '@apply px-0': {},
          },
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
        },
        '&.ui-input--before .ui-input__wrapper': {
          '@apply rounded-l-none': {},
        },
        '&.ui-input--after .ui-input__wrapper': {
          '@apply rounded-r-none': {},
        },
        '&:focus-within::after': {
          transform: 'scaleX(1)',
        },
        '& input': {
          '@apply absolute appearance-none block box-border h-full left-0 m-0 w-full': {},
          backgroundColor: 'transparent',
          borderRadius: 'inherit',
          color: 'inherit',
          font: 'inherit',
          padding: 'inherit',
          '-webkit-tap-highlight-color': 'transparent',
          '&::placeholder': {
            color: 'inherit',
            opacity: 0.4,
          },
        },
        '& .ui-input__label--error-bullet': {
          '@apply hidden ml-1': {},
        },
        '& .ui-input__label': {
          '@apply block items-center left-0 right-0 truncate absolute py-0 pointer-events-none select-none leading-6': {},
          padding: 'inherit',
          transition: 'font 0.32s ease, transform 0.32s ease',
        },
        '&.ui-input--filled, &:focus-within': {
          '& .ui-input__label': {
            'font-size': '0.64rem',
            transform: 'translateY(-56%)',
          },
        },
        '& :invalid ~ .ui-input__label .ui-input__label--error-bullet': {
          '@apply inline ui-ink-error': {},
        },
        '& .ui-input__menu': {
          '@apply absolute invisible top-full left-0 right-0 transform duration-200 translate-y-8 opacity-0 z-50': {},
        },
        '&:focus-within, &:active': {
          '&  .ui-input__menu': {
            '@apply visible translate-y-0 opacity-100': {},
          },
        },
      },
    },
    { variants: ['dark'] }
  )
})
