const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
  addBase(
    {
      // '.ui-addon': {
      //   '@apply mx-4 inline-flex items-center justify-center': {},
      //   minHeight: '1.5rem',
      //   minWidth: '1.5rem',
      // },
    }
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
