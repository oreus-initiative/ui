import React from 'react';
import { ThemeProvider, convert, themes } from '@storybook/theming';

import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

export const decorators = [
  (StoryFn) => (
    <ThemeProvider theme={convert(themes.light)}>
      <StoryFn />
    </ThemeProvider>
  ),
];
