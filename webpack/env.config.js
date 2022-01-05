/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// Development server config
const devServer = {
  hot: true,
  open: true,
  port: 3000,
  static: {
    directory: path.resolve(__dirname, 'build'),
  },
  client: {
    progress: true,
  },
};

const getEnvConfig = (isProduction) => {
  let config = {};

  // if (isProduction) {}

  if (!isProduction) {
    config = { ...config, devServer };
  }

  return config;
};

module.exports = {
  getEnvConfig,
};
