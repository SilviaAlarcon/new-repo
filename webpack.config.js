const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const dotenv = require('dotenv');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
//const ManifestPlugin = require('webpack-manifest-plugin');

dotenv.config();

const isProd = (process.env.NODE_ENV === 'production');

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: isProd ?
      path.join(process.cwd(), './src/server/public') : '/',
    filename: 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimizer: isProd ? [ //si es producción minificar y agregar estos paquetes de optimización, si no, array vacío*/
      new TerserPlugin(),
    ] : [],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: /*isProd ? 'assets/vendor-[hash].js' : */'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some(chunks => chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              //recibe dos parametros, el nombre de un directorio y la ruta a la que queremos acceder
              data: `@import "${path.resolve(__dirname, 'src/assets/styles/Vars.scss')}";  
              @import "${path.resolve(__dirname, 'src/assets/styles/Media.scss')}";
              @import "${path.resolve(__dirname, 'src/assets/styles/Base.scss')}";`,
            },
          },
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
    isProd ? new CompressionPlugin({
      test: /\.js$|\.css$/, //expresión regular que nos dice que tipo de archivos va a buscar para comprimir 
      filename: '[path].gz',
    }) : false, /*() => { },
    isProd ? new ManifestPlugin() : () => { },*/
  ],
};
