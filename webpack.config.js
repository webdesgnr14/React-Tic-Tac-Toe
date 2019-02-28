
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   entry: './dev/components/main.js',
   output: {
      path: path.join(__dirname, '/web'),
      filename: 'main.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ['css-loader', 'sass-loader']
            })
          }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './web/index.html'
      }),
      new ExtractTextPlugin({
       filename: 'styles.css',
       publicPath: './web/',
       allChunks: true
     })
   ]
 }
