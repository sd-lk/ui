const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, addVariant, e }) {
  addBase(
    {}
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
  addVariant('disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`disabled${separator}${className}`)}:disabled`
    })
  })
})
