const { sdlkPreset } = require('@sdlk/tailwind-preset')
console.log('sdlkPreset: ', sdlkPreset)

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
  plugins: [],
}
