/**
 * Read https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 * for more information about the purpose of this file.
 *
 * Use preview.js for global code (such as CSS imports or JavaScript mocks)
 * that applies to all stories. For example, `import thirdPartyCss.css`.
 *
 * This file can have three exports:
 * - decorators - an array of global decorators
 * - parameters - an object of global parameters
 * - globalTypes - definition of globalTypes
 */

/**
 * Decorators
 *
 * A decorator is a way to wrap a story in extra “rendering” functionality.
 *
 * Example:
 *
 * import React from 'react';
 * export const decorators = [(Story) => <div style={{ margin: '3em' }}><Story/></div>];
 *
 * Each story throughout the library will be wrapped in a div with a margin of 3
 */

/**
 * Parameters
 *
 * Most Storybook addons are configured via a parameter-based API.
 * You can set global parameters in this file
 *
 * export const parameters = {
 *   backgrounds: {
 *     values: [
 *       { name: 'red', value: '#f00' },
 *       { name: 'green', value: '#0f0' },
 *     ],
 *   },
 * };
 *
 * With backgrounds, you configure the list of backgrounds that every story can render in.
 */

/**
 * Global Types
 *
 * Global Types allow you to add your own toolbars by creating
 * globalTypes with a toolbar annotation:
 *
 * For example:
 *
 * export const globalTypes = {
 *   theme: {
 *     name: 'Theme',
 *     description: 'Global theme for components',
 *     defaultValue: 'light',
 *     toolbar: {
 *       icon: 'circlehollow',
 *       // array of plain string values or MenuItem shape
 *       items: ['light', 'dark'],
 *       },
 *     },
 *   };
 *
 * Will add a new dropdown in your toolbar with options light and dark.
 **/

// .storybook/preview.js

const customViewports = {
  iphoneSE: {
    name: 'Iphone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iphoneXR: {
    name: 'Iphone XR',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  iphone12Pro: {
    name: 'Iphone 12 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  pixel5: {
    name: 'Pixel 5',
    styles: {
      width: '393px',
      height: '851px',
    },
  },
  samsungGalaxyS8Plus: {
    name: 'Samsung Galaxy S8 Plus',
    styles: {
      width: '360px',
      height: '740px',
    },
  },
  samsungGalaxyS20Ultra: {
    name: 'Samsung Galaxy S20 Ultra',
    styles: {
      width: '412px',
      height: '915px',
    },
  },
  ipadAir: {
    name: 'iPad Air',
    styles: {
      width: '820px',
      height: '1180px',
    },
  },
  ipadMini: {
    name: 'iPad Mini',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  surfacePro7: {
    name: 'Surface Pro 7',
    styles: {
      width: '912px',
      height: '1368px',
    },
  },
  surfaceDuo: {
    name: 'Surface Duo',
    styles: {
      width: '540px',
      height: '720px',
    },
  },
  samsungGalaxyFold: {
    name: 'Samsung Galaxy Fold',
    styles: {
      width: '280px',
      height: '653px',
    },
  },
  samsungGalaxyA51: {
    name: 'Samsung Galaxy A51',
    styles: {
      width: '412px',
      height: '914px',
    },
  },
  nestHub: {
    name: 'NestHub',
    styles: {
      width: '1024px',
      height: '600px',
    },
  },
};

export const parameters = {
  viewport: { viewports: customViewports },
};