/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const paperPlugin = plugin(({ addUtilities }) => {
  addUtilities(
    {
      '.ui-paper': {
        '@apply bg-paper dark:bg-paper-dark': {},
      },
      '.ui-paper-2': {
        '@apply bg-paper-2 dark:bg-paper-2-dark': {},
      },
      '.ui-paper-3': {
        '@apply bg-paper-3 dark:bg-paper-3-dark': {},
      },
      '.ui-paper-primary': {
        '@apply bg-paper-primary dark:bg-paper-primary-dark': {},
      },
      '.ui-paper-secondary': {
        '@apply bg-paper-secondary dark:bg-paper-secondary-dark': {},
      },
      '.ui-paper-error': {
        '@apply bg-paper-error dark:bg-paper-error-dark': {},
      },
      '.ui-paper-success': {
        '@apply bg-paper-success dark:bg-paper-success-dark': {},
      },
      '.ui-paper-warning': {
        '@apply bg-paper-warning dark:bg-paper-warning-dark': {},
      },
      '.ui-paper-info': {
        '@apply bg-paper-info dark:bg-paper-info-dark': {},
      },
    },
    { variants: ['checked'] }
  )
})
