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
  devServer: {
    port: 8082,
    proxy: {
      '/remote': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/remote': '' },
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
        }
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /.css$/, use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: {
                tailwindcss: {},
                autoprefixer: {},
              }
            }
          }
        }]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      remotes: {
        '@skiller-webpack/main': 'shared@http://localhost:8082/remote/shared-bundle.js',
      },
      name: 'hackernews',
      filename: 'hackernews-bundle.js',
      exposes: [{ './HackerNews': './src/HackerNews' }],
      shared: ['react', 'react-dom'],
    }),
  ],
};
