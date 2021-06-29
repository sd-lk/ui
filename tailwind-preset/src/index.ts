import { colors } from './colors'
import { paperPlugin } from './paper.plugin'
import { inkPlugin } from './ink.plugin'
import { linkPlugin } from './link.plugin'
import { spinnerPlugin } from './spinner.plugin'

export const sdlkPreset = {
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [paperPlugin, inkPlugin, linkPlugin, spinnerPlugin],
  variants: {
    extend: {
      textColor: ['visited', 'hover', 'active', 'dark'],
    },
  },
}
