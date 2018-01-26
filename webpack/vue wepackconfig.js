const path = require('path');
const Hwp = require('html-webpack-plugin');
module.exports = {
    entry: { // 入口
        app: './src/main.js'
    },
    output: { // 输出
        filename: '[name].js',
        path: path.join(__dirname, '/build')
    },
    devtool: 'cheap-module-eval-source-map', // 具体错误提示
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
                test: /\.vue$/,
                use: 'vue-loader'
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
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [ // 相关插件
        new Hwp({ // 地址栏为  localhost：9999 起服务加载页面 -> index.html页面没有链接别的 自带刷新
            title: 'hello webpack',
            template: 'index.html',
            inject: 'body', // inject 注入
            'process.env': {
                NOOE_ENV: 'development'
            }
        })
    ],
    devServer: {
        port: 8888,
        // historyApiFallback: true,
        // noInfo: true,
        hot: true,
        inline: true
    }
};
