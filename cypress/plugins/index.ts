/**
 * @type {Cypress.PluginConfig}
 */

// @ts-ignore
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);

  if (config.testingType === 'component') {
    require('@cypress/react/plugins/next')(on, config);
  }

  return config;
};
