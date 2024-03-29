const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index',
  },
  output: {
    filename: '[id]-bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/reddit': {
        target: 'http://localhost:8081',
        pathRewrite: { '^/reddit': '' },
      },
      '/hackernews': {
        target: 'http://localhost:8082',
        pathRewrite: { '^/hackernews': '' },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/, loader: 'bundle-loader', options: {
          lazy: true,
        },
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/, use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: {
                tailwindcss: {},
                autoprefixer: {},
              },
            },
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Skiller Webpack'
    }),
    new ModuleFederationPlugin({
      name: 'shared',
      remotes: {
        '@skiller-webpack/reddit': 'reddit@http://localhost:8080/reddit/reddit-bundle.js',
        '@skiller-webpack/hackernews': 'hackernews@http://localhost:8080/hackernews/hackernews-bundle.js',
      },
      exposes: [
        { './JsonFetcher': './src/shared/JsonFetcher' },
        { './Card': './src/shared/Card' },
      ],
      shared: ['react', 'react-dom'],
    }),
  ],
}
