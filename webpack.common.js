const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
    context: __dirname,
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html'),
            filename: 'index.html',
            favicon: path.resolve( __dirname, 'public/favicon.ico'),
            inject: true
        })
    ]
};
