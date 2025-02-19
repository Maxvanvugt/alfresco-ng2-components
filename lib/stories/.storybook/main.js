const rootMain = require('../../../.storybook/main');


module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack4' },

  stories: [
    ...rootMain.stories,
    '../../core/**/*.stories.@(js|jsx|ts|tsx)',
    '../../content-services/**/*.stories.@(js|jsx|ts|tsx)',
    '../../process-services-cloud/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [...rootMain.addons ],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }



    // add your own webpack tweaks if needed

    return config;
  },
};
