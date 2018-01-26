const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: {
        'bundle': './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|woff|svg|eot|jpg|png)$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=50000'
            },
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        // open: true,
        port: 8888,
        inline: true,
        noInfo: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE.ENV': JSON.stringify('development')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};
