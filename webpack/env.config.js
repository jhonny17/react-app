/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const dotenv = require('dotenv');

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

const getTypedEnvValue = (value) => {
  if (/^-?[0-9]+(\.[0-9]+)?$/.test(value)) return +value;
  if (value === 'true' || value === 'false') return value === 'true';
  return JSON.stringify(value);
};

const getEnvVariables = (mode) => {
  const envResult = dotenv.config({
    path: path.resolve(__dirname, '..', `.${mode}.env`),
  });

  if (envResult.error) throw envResult.error;

  const envVariables = {};

  Object.keys(envResult.parsed).map((key) => {
    const value = getTypedEnvValue(envResult.parsed[key]);
    envVariables[`process.env.${key}`] = value;
  });

  return envVariables;
};

module.exports = {
  getEnvConfig,
  getEnvVariables,
};
