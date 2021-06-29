const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
  addBase(
    {
      // '.ui-spinner': {
      //   '@apply rounded-full border-2 w-6 h-6 animate-spinner': {},
      //   borderColor: 'currentColor !important',
      //   borderLeftColor: 'transparent !important',
      //   borderRightColor: 'transparent !important',
      // },
    }
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
