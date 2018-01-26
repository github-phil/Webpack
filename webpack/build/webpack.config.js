const path = require('path');
const Hwp = require('html-webpack-plugin'); // 模板
const webpack = require('webpack');
module.exports = {
    entry: { // 可以是字符串 对象 './src/main.js'
        app: './src/main.js'
    },
    output: {
        filename: '[name]-[hash:7].js', // 原先为具体路径 bundle.js   [name] 根据entry为字符串显示 main.js    对象显示对象名app (Network下查看) hash加密
        path: path.join(__dirname, '/build')
        // publicPath: 'static'  // 路径图片  虚拟的
    },
    module: {
        rules: [
            {
                // test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                test: /\.css$/,
                loader: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.js$/,
            //     loader: ['babel-loader'] // 下包
            // },
            {
                test: /\.jpg$/,
                loader: 'url-loader', // 挂在一个的用 loader
                options: {// 选择
                    limit: '1024'
                }
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader', // 挂在一个的用 loader
                options: {// 选择
                    limit: '1024'
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', // 小黑板运行webpack-dev-server --hot --inline  使得浏览器知道具体是谁抛出的（原来的抛出路径都是bundle.js）
    plugins: [ // 相关插件
        new Hwp({ // 地址栏为  localhost：9999 起服务加载页面 -> index.html页面没有链接别的 自带刷新
            title: 'hello webpack',
            template: 'index.html',
            inject: 'body' // inject 注入
        }),
        new webpack.BannerPlugin('1508A'), // 浏览器 Network  点击提示内容（链入的文件）Response  出现定义的1508A 在最顶头
        new webpack.DefinePlugin({ // 动态生成一个环境地址
            'process.env': {
                'NODE_ENV': '"devn"' // 开发环境
            }
        })
    ],
    // resolveLoader: { // 加载loader 以上的 style-loader loader 可省
    //     moduleExtenstion: ['-loader']
    // },
    devServer: { // 服务
        // contentBase: './build',
        port: '9999',
        hot: true,
        inline: true
    }
};
