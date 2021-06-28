import { colors } from './colors'
import { paperPlugin } from './paper.plugin'
import { inkPlugin } from './ink.plugin'
import { linkPlugin } from './link.plugin'

export const sdlkPreset = {
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [paperPlugin, inkPlugin, linkPlugin],
  variants: {
    extend: {
      textColor: ['visited', 'hover', 'active', 'dark'],
    },
  },
}
