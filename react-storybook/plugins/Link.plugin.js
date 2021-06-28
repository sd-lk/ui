const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  addUtilities(
    {
      'a.ui-link': {
        '@apply text-link dark:text-link-dark active:text-link-active dark:active:text-link-active-dark hover:text-link-hover dark:hover:text-link-hover-dark visited:text-link-visited dark:visited:text-link-visited-dark': {},
      },
      '.ui-link-box a': {
        '@apply text-link dark:text-link-dark active:text-link-active dark:active:text-link-active-dark hover:text-link-hover dark:hover:text-link-hover-dark visited:text-link-visited dark:visited:text-link-visited-dark': {},
      },
    },
    { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] }
  )
})
