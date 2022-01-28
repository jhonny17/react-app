/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// Development server config
const devServer = {
  hot: true,
  open: true,
  historyApiFallback: {
    index: '/',
  },
  port: 3000,
  static: {
    directory: path.resolve(__dirname, 'build'),
  },
};

const getEnvConfig = (isProduction) => {
  const config = {};

  // if (isProduction) {}

  if (!isProduction) {
    return { ...config, devServer };
  }

  return config;
};

module.exports = {
  getEnvConfig,
};
