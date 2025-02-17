import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    config.css = {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    }
    return config
  },
}

export default config
