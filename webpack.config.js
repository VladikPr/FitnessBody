const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 8080,
        hot: true,
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
    
};