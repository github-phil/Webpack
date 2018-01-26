const path = require('path');
module.exports = {
    entry: { // 可以是字符串 对象 './src/main.js'
        app: './src/main.js'
    },
    output: {
        filename: '[name]-[hash:7].js', // 原先为具体路径 bundle.js   [name] 根据entry为字符串显示 main.js    对象显示对象名app (Network下查看) hash加密
        path: path.join(__dirname, '/build'),
        publicPath: '/'  // 路径图片  虚拟的
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
    devtool: 'cheap-module-eval-source-map' // 小黑板运行webpack-dev-server --hot --inline  使得浏览器知道具体是谁抛出的（原来的抛出路径都是bundle.js）
   
};
