/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'
import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const paperPlugin = plugin(({ addUtilities, prefix }) => {
  addUtilities(
    {
      '.ui-paper': {
        ...applyPrefixed(prefix, '.bg-paper', '.dark:bg-paper-dark'),
      },
      '.ui-paper-2': {
        ...applyPrefixed(prefix, '.bg-paper-2', '.dark:bg-paper-2-dark'),
      },
      '.ui-paper-3': {
        ...applyPrefixed(prefix, '.bg-paper-3', '.dark:bg-paper-3-dark'),
      },
      '.ui-paper-primary': {
        ...applyPrefixed(prefix, '.bg-paper-primary', '.dark:bg-paper-primary-dark'),
      },
      '.ui-paper-secondary': {
        ...applyPrefixed(prefix, '.bg-paper-secondary', '.dark:bg-paper-secondary-dark'),
      },
      '.ui-paper-error': {
        ...applyPrefixed(prefix, '.bg-paper-error', '.dark:bg-paper-error-dark'),
      },
      '.ui-paper-success': {
        ...applyPrefixed(prefix, '.bg-paper-success', '.dark:bg-paper-success-dark'),
      },
      '.ui-paper-warning': {
        ...applyPrefixed(prefix, '.bg-paper-warning', '.dark:bg-paper-warning-dark'),
      },
      '.ui-paper-info': {
        ...applyPrefixed(prefix, '.bg-paper-info', '.dark:bg-paper-info-dark'),
      },
    },
    { variants: ['checked', 'focus-within'] }
  )
})
