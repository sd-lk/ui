const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
  addBase(
    {
      // '.ui-button': {
      //   '@apply py-2 px-4 rounded text-sm font-medium leading-6 flex gap-2 items-center justify-center relative filter active:brightness-90 hover:brightness-95 transition duration-150': {},
      // },
    }
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
