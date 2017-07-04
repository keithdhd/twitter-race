const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: __dirname + '/app.js',
  output: {
    path: __dirname + '/../public',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.sass']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: `${__dirname}/index.html`,
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      // filename: 'style.css'
      filename: (getPath) => {
        console.log(getPath('[name].css'))
        return getPath('[name].css')
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      },
      // THIS WORKS
      // {
      //   test: /\.sass$/,
      //   loader: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader',
      //   ]
      // },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }),
      },
      {
        test: /(\.sass$|\.scss$)/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
          fallback: 'style-loader'
        }),
      },
    ]
  }
};

module.exports = config;
