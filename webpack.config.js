/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envFunctions = require('./webpack/env.config');
const { getEnvConfig, getEnvVariables } = envFunctions;

module.exports = (env) => {
  // Getting the environment
  const { isProduction } = env;
  const mode = isProduction ? 'production' : 'development';

  // Printing in the console the environment
  console.log('Webpack', { mode }, '\n');

  // Getting environment variables
  const envVariables = getEnvVariables(mode);

  // Getting environment configs
  const envConfig = getEnvConfig(isProduction);

  return {
    mode,
    entry: {
      app: path.resolve(__dirname, 'src'),
    },
    devtool: 'inline-source-map',
    output: {
      clean: true,
      publicPath: '/',
      asyncChunks: true,
      filename: '[name].bundle.[id].js',
      chunkFilename: '[name].chunk.[id].js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new webpack.DefinePlugin(envVariables),
      new HtmlWebpackPlugin({
        minify: isProduction === true,
        template: './src/index.html',
        templateParameters: {
          title: 'React-Firebase',
        },
      }),
      // Displays the webpack progress in the console
      new webpack.ProgressPlugin(),
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src', 'assets'),
        path.resolve(__dirname, 'node_modules'),
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2,
                modules: {
                  localIdentName: isProduction
                    ? '[hash:base64]'
                    : '[local]_[name]_[hash]',
                },
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'src', 'assets', 'styles')],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            outputPath: (url, resourcePath, context) => {
              // Output for the images
              if (/\.(png|jpe?g|gif|svg)$/i.test(url)) return `images/${url}`;

              // Default output
              return undefined;
            },
          },
        },
      ],
    },
    ...envConfig,
  };
};
