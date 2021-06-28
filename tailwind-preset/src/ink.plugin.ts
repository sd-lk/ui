/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const inkPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    '.ui-ink': {
      '@apply text-ink dark:text-ink-dark': {},
      borderColor: 'currentColor',
    },
    '.ui-ink-primary': {
      '@apply text-ink-primary dark:text-ink-primary-dark': {},
      borderColor: 'currentColor',
    },
    '.ui-ink-secondary': {
      '@apply text-ink-secondary dark:text-ink-secondary-dark': {},
      borderColor: 'currentColor',
    },
    '.ui-ink-error': {
      '@apply text-ink-error dark:text-ink-error-dark': {},
      borderColor: 'currentColor',
    },
    '.ui-ink-success': {
      '@apply text-ink-success dark:text-ink-success-dark': {},
      borderColor: 'currentColor',
    },
    '.ui-ink-warning': {
      '@apply text-ink-warning dark:text-ink-warning-dark': {},
      borderColor: 'currentColor',
    },
    '.ui-ink-info': {
      '@apply text-ink-info dark:text-ink-info-dark': {},
      borderColor: 'currentColor',
    },
  })
})
