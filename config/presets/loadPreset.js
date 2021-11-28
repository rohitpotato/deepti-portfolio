/* eslint-disable import/no-dynamic-require */
const { merge } = require('webpack-merge');

const loadPresets = (env = { presets: [] }) => {
 const presets = env.presets || [];
 /** @type {string[]} */
 const mergedPresets = [].concat(...[presets]);
 const mergedConfigs = mergedPresets.map((presetName) =>
  // eslint-disable-next-line global-require
  require(`./webpack.${presetName}.js`)(env),
 );

 return merge({}, ...mergedConfigs);
};
module.exports = loadPresets;
