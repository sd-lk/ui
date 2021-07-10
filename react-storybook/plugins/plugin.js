const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
  addBase(
    {
      // '.ui-linear-progress::after': {
      //   '@apply absolute top-0 left-0 bottom-0 animate-ui-linear-progress': {},
      //   backgroundColor: 'currentColor',
      //   content: '""',
      // },
    }
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
