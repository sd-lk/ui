const { sdlkPreset } = require('@sdlk/tailwind-preset')
// const paperPlugn = require('./plugins/paper.plugin')
// const linkPlugn = require('./plugins/link.plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  presets: [sdlkPreset],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [linkPlugn],
}
