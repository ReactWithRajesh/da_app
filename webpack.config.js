// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader?name=./images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "public/images", to: "images" },
                { from: "public/favicon.ico", to: "favicon.ico" },
                { from: "public/manifest.json", to: "manifest.json" },
                // { from: "public/locales", to: "locales" }
            ],
        }),
        // new webpack.ProvidePlugin({
        //     process: 'process/browser',
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackAssetsManifest({
            output: "asset-manifest.json",
            transform(assets, manifest) {
                return {
                    files: assets
                }
            }
        })
    ]
};
