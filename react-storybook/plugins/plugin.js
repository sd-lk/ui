const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
  addBase(
    {
      // 'hr, .ui-divider': {
      //   borderWidth: '1px 0 0 0',
      //   borderTopColor: 'currentColor',
      // },
    }
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
