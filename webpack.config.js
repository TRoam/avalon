var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const cssModulesNames = `[path][name]__[local]__[hash:base64:5]`;

const join = path.join,
      resolve = path.resolve;

const ROOT_PATH = resolve(__dirname);
const APP_PATH  = resolve(ROOT_PATH,'app');
const BUILD_PATH= resolve(ROOT_PATH,'build');
const MODULE_PATH = join(ROOT_PATH,'node_modules');


module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'index.js')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  //babel重要的loader在这里
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['react','es2015', 'stage-0']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000',
        include: APP_PATH
      },
      {
        test: /\.module\.css$/,
        // test: /\.css$/,
        include: APP_PATH,
        loader: `style!css?module&localIdentName=${cssModulesNames}!postcss`
      },
      {
        test: /[^module]\.css$/,
        loader: "style-loader!css-loader!postcss-loader",
        include: APP_PATH
      },
      {
        test:/\.css$/,
        include:[MODULE_PATH],
        loader: "style!css"
      }
    ]
  },
  postcss: function () {
        return [require('autoprefixer'), require('precss'),require('cssnano')];
  },  
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Avalon'
    })
  ]
};
