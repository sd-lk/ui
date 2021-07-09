import { addonPlugin } from './addon.plugin'
import { badgePlugin } from './badge.plugin'
import { buttonPlugin } from './button.plugin'
import { colors } from './colors'
import { inkPlugin } from './ink.plugin'
import { linkPlugin } from './link.plugin'
import { paperPlugin } from './paper.plugin'
import { spinnerPlugin } from './spinner.plugin'

export const sdlkPreset = {
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    addonPlugin,
    badgePlugin,
    buttonPlugin,
    inkPlugin,
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
