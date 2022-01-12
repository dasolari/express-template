/* eslint-disable no-underscore-dangle */
import { join, dirname } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const developmentMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default {
  mode: developmentMode ? 'development' : 'production',
  context: join(__dirname, 'src', 'assets'),
  entry: {
    app: ['./js/index.js'],
  },
  output: {
    publicPath: '/assets/',
    path: join(__dirname, 'build', 'assets'),
    filename: developmentMode
      ? '[name].js'
      : '[name]-[hash].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
  },
  devtool: developmentMode ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/i,
        loader: 'file-loader',
        options: {
          name: developmentMode ? '[name].[ext]' : '[name]-[hash].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.s?css$/,
        use: [
          developmentMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css',
    }),
    new WebpackManifestPlugin(),
  ],
};
