const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    devtool: 'source-map',
    stats: {
        colors: false,
        hash: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: true
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                canPrint: true
            })
        ],
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                },
                vendor: {
                    reuseExistingChunk: true,
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // eslint-disable-next-line
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                    priority: 10,
                    minSize: 1024 * 10
                }
            },
            chunks: 'all',
            minChunks: 1,
            maxInitialRequests: Infinity,
            minSize: 1024 * 10
        }
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
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['../dist'],
            dangerouslyAllowCleanPatternsOutsideProject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[name].[chunkhash].css',
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader?name=images/[name].[hash].[ext]']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader?name=fonts/[name].[hash].[ext]']
            }
        ]
    }
});
