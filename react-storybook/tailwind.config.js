const { sdlkPreset } = require('@sdlk/tailwind-preset')
const plugin = require('./plugins/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  presets: [sdlkPreset],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {},
      keyframes: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [plugin],
}
