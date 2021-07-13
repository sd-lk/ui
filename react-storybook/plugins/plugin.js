const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, addVariant, e }) {
  addBase(
    {
      // '.ui-checkbox': {
      //   '@apply w-6 h-6 appearance-none border-2 ui-ink rounded cursor-pointer relative': {},
      //   '&::before': {
      //     '@apply absolute left-0.5 top-0.5 right-0.5 bottom-0.5 rounded-sm transform scale-0 transition duration-100': {},
      //     backgroundColor: 'currentColor',
      //     borderColor: 'currentColor',
      //     content: '""',
      //   },
      //   '&:checked::before': {
      //     '@apply scale-100': {},
      //   },
      // },
    }
    // { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
  addVariant('disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`disabled${separator}${className}`)}:disabled`
    })
  })
})
