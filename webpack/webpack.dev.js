const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: ['react-hot-loader/patch', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 2 version']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                BASE_URL: JSON.stringify('')
            }
        }),
        new HtmlWebpackPlugin({
            template: 'static/index.html',
            inject: 'body'
        })
    ]
});
