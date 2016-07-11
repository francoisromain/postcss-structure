import postcss from 'postcss';
import postcssGridSystem from 'postcss-grid-system';
import postcssGridFluid from 'postcss-grid-fluid';
import postcssButton from 'postcss-button';
import postcssTypescale from 'postcss-typescale';

module.exports = postcss.plugin('postcss-structure', (opts) => {
  const instance = postcss();

  const processors = [{
    plugin: postcssButton,
    namespace: 'postcss-button',
    options: {},
  }, {
    plugin: postcssTypescale,
    namespace: 'postcss-typescale',
    options: {},
  }, {
    plugin: postcssGridFluid,
    namespace: 'postcss-grid-fluid',
    options: {},
  }, {
    plugin: postcssGridSystem,
    namespace: 'postcss-grid-system',
    options: {},
  }];

  const options = {
    'postcss-grid-system': true,
    'postcss-grid-fluid': true,
    'postcss-button': true,
    'postcss-typescale': true,
  };

  Object.assign(options, opts);

  processors.forEach((processor) => {
    if (options[processor.namespace]) {
      instance.use(processor.plugin());
    }
  });

  return instance;
});
