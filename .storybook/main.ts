import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/0_welcome/*.stories.mdx",
    "../src/components/1_inputs/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/2_display/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/3_feedback/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/4_containers/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/5_navigation/**/*.stories.@(js|jsx|ts|tsx)",
    {
      directory: '../src',
      titlePrefix: 'Demo',
    },
  ],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-storyshots',
    '@storybook/addon-a11y',
    '@storybook/preset-scss'
  ],
  staticDirs: ['../public'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  core: {
    builder: 'webpack4',
    channelOptions: { allowFunction: false, maxDepth: 10 },
  },
  features: {
    postcss: false,
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    buildStoriesJson: true,
    babelModeV7: true,
    warnOnLegacyHierarchySeparator: false,
  },
  framework: '@storybook/react',
};
module.exports = config;
