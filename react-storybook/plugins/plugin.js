const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
  addBase(
    {
      // '.ui-list-header': {
      //   '@apply text-sm opacity-60 px-4': {},
      // },
      // '.ui-list-item': {
      //   '@apply px-4 py-2 m-0': {},
      // },
      // '.ui-list-group': {
      //   '@apply flex items-center py-2 m-0': {},
      // },
      // '.ui-list-text': {
      //   '@apply px-4 flex-1': {},
      // },
      // '.ui-list-icon': {
      //   '@apply block mx-5': {},
      // },
    }
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
