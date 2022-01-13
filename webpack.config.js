/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envFunctions = require('./webpack/env.config');
const { getEnvConfig } = envFunctions;

module.exports = (env) => {
  // Getting the environment
  const { isProduction } = env;
  const mode = isProduction ? 'production' : 'development';

  // Printing in the console the environment
  console.log('Webpack', { mode }, '\n');

  // Getting environment configs
  const envConfig = getEnvConfig(isProduction);

  return {
    mode,
    entry: {
      app: path.resolve(__dirname, 'src'),
    },
    output: {
      clean: true,
      asyncChunks: true,
      publicPath: 'auto',
      filename: '[name].bundle.[id].js',
      chunkFilename: '[name].chunk.[id].js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
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
      extensions: ['.ts', '.tsx', '.js', '.scss'],
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
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            outputPath: (url, resourcePath, context) => {
              // Output for the images
              if (/\.(png|jpe?g|gif|svg)$/i.test(url))
                return `assets/images/${url}`;

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
