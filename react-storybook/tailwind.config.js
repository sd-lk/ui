const { sdlkPreset } = require('@sdlk/tailwind-preset')
const plugin = require('./plugins/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  presets: [sdlkPreset],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        spinner: 'spinner 1.6s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      },
      keyframes: {
        spinner: {
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
  variants: {
    extend: {},
  },
  plugins: [plugin],
}
