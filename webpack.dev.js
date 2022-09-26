const path = require('path');
const common = require('./webpack.common.js')
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'dist'),
            },
        ],
        historyApiFallback: {
            index: 'index.html'
        },
        compress: true,
        hot: true
    }
});
