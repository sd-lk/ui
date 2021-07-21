/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'

// @ts-ignore
export const inkPlugin = plugin(function ({ addUtilities }) {
  // NOTE: Utility level in order to override border color on base level
  addUtilities({
    '.ui-ink': {
      '@apply border-ink text-ink dark:border-ink-dark dark:text-ink-dark': {},
    },
    '.ui-ink-primary': {
      '@apply border-ink-primary text-ink-primary dark:border-ink-primary-dark dark:text-ink-primary-dark': {},
    },
    '.ui-ink-secondary': {
      '@apply border-ink-secondary text-ink-secondary dark:border-ink-secondary-dark dark:text-ink-secondary-dark': {},
    },
    '.ui-ink-error': {
      '@apply border-ink-error text-ink-error dark:border-ink-error-dark dark:text-ink-error-dark': {},
    },
    '.ui-ink-success': {
      '@apply border-ink-success text-ink-success dark:border-ink-success-dark dark:text-ink-success-dark': {},
    },
    '.ui-ink-warning': {
      '@apply border-ink-warning text-ink-warning dark:border-ink-warning-dark dark:text-ink-warning-dark': {},
    },
    '.ui-ink-info': {
      '@apply border-ink-info text-ink-info dark:border-ink-info-dark dark:text-ink-info-dark': {},
    },
    '.ui-ink-border': {
      '@apply border-ink-border text-ink-border dark:border-ink-border-dark dark:text-ink-border-dark': {},
    },
  })
})
