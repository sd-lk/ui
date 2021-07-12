const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, addVariant, e }) {
  addBase()
  // {
  //   '.ui-switch': {
  //     '@apply appearance-none transition duration-300 rounded-full cursor-pointer ui-paper-2': {},
  // }
  // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  addVariant('disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`disabled${separator}${className}`)}:disabled`
    })
  })
})
