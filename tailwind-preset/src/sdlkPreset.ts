import { addonPlugin } from './addonPlugin'
import { badgePlugin } from './badgePlugin'
import { buttonPlugin } from './buttonPlugin'
import { colors } from './colors'
import { dividerPlugin } from './dividerPlugin'
import { entypoPlugin } from './entypoPlugin'
import { inkPlugin } from './inkPlugin'
import { linearProgressPlugin } from './linearProgressPlugin'
import { linkPlugin } from './linkPlugin'
import { listPlugin } from './listPlugin'
import { paperPlugin } from './paperPlugin'
import { spinnerPlugin } from './spinnerPlugin'

export const sdlkPreset = {
  theme: {
    extend: {
      colors,
      animation: {
        'ui-linear-progress': 'ui-linear-progress 2s infinite linear',
        'ui-spinner': 'ui-spinner 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
      keyframes: {
        'ui-linear-progress': {
          '0%': {
            backgroundSize: '200% 100%',
            backgroundPosition: 'left -31.25% top 0%',
          },
          '50%': {
            backgroundSize: '800% 100%',
            backgroundPosition: 'left -49% top 0%',
          },
          '100%': {
            backgroundSize: '400% 100%',
            backgroundPosition: 'left -102% top 0%',
          },
        },
        'ui-spinner': {
          '0%': {
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            transform: 'rotate(0)',
          },
          '24%': {
            animationTimingFunction:
              'animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'rotate(900deg)',
          },
          '100%': {
            transform: 'rotate(1800deg)',
          },
        },
      },
    },
  },
  plugins: [
    addonPlugin,
    badgePlugin,
    buttonPlugin,
    dividerPlugin,
    entypoPlugin,
    inkPlugin,
    listPlugin,
    linearProgressPlugin,
    linkPlugin,
    paperPlugin,
    spinnerPlugin,
  ],
  variants: {
    extend: {
      brightness: ['active', 'hover'],
      textColor: ['visited', 'hover', 'active', 'dark'],
    },
  },
}