import { themes } from '@storybook/theming'

import { sdlkPreset } from '@sdlk/tailwind-preset'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: sdlkPreset.theme.extend.colors.paper['2'].dark,
      appContentBg: sdlkPreset.theme.extend.colors.paper.dark,
      barSelectedColor: sdlkPreset.theme.extend.colors.paper.info.dark,
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: sdlkPreset.theme.extend.colors.paper['2'].DEFAULT,
      appContentBg: sdlkPreset.theme.extend.colors.paper.DEFAULT,
      barSelectedColor: sdlkPreset.theme.extend.colors.paper.info.DEFAULT,
    },
    // current: 'light',
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    stylePreview: true,
  },
}
