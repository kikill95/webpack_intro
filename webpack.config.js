const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: [path.join(__dirname, '/js/main.js')],
    output: {
        path: __dirname + '/build',
        publicPath: '/build',
        filename: 'scripts.js'
    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false
            }
        }),
        new ExtractTextPlugin('styles.css')
    ],
    devtool: 'source-map'
};

module.exports = config;
