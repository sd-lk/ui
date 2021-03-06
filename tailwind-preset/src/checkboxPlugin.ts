/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import plugin from 'tailwindcss/plugin'
import { applyPrefixed } from './applyPrefixed'

// @ts-ignore
export const checkboxPlugin = plugin(function ({ addBase, prefix }) {
  addBase({
    '.ui-checkbox': {
      ...applyPrefixed(
        prefix,
        '.appearance-none',
        '.border-2',
        '.ui-ink',
        '.rounded',
        '.cursor-pointer',
        '.relative'
      ),
      height: '1.5rem',
      width: '1.5rem',
      minWidth: '1.5rem',
      '&::before': {
        ...applyPrefixed(
          prefix,
          '.absolute',
          '.left-0.5',
          '.top-0.5',
          '.right-0.5',
          '.bottom-0.5',
          '.rounded-sm',
          '.transform',
          '.scale-0',
          '.transition',
          '.duration-100'
        ),
        backgroundColor: 'currentColor',
        content: '""',
      },
      '&:checked::before': {
        ...applyPrefixed(prefix, '.scale-100'),
      },
      '&:invalid': {
        ...applyPrefixed(prefix, '.ui-ink-error'),
        '&::before': {
          ...applyPrefixed(prefix, '.ui-bg-error'),
        },
      },
    },
  })
})
