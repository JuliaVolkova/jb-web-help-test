const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
    resolve: {
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../static'),
            'node_modules'
        ],
        alias: {
            app: path.resolve(projectRoot, 'src/pages/app'),
            components: path.resolve(projectRoot, 'src/components'),
            ducks: path.resolve(projectRoot, 'src/ducks'),
            pages: path.resolve(projectRoot, 'src/pages'),
            api: path.resolve(projectRoot, 'src/api'),
            utils: path.resolve(projectRoot, 'src/utils'),
            store: path.resolve(projectRoot, 'src/pages'),
            enum: path.resolve(projectRoot, 'src/enum'),
            src: path.resolve(projectRoot, 'src'),
            static: path.resolve(projectRoot, 'static')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ]
    }
};
