const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool: "source-map",
    entry:[
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'

    },
    module:{
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/,
                query:{
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }

            }
        ]
    }
}