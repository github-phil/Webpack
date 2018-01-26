const Hwp = require('html-webpack-plugin'); // 模板
const webpack = require('webpack');
const merge = require('webpack-merge'); // 合并
const webpackbase = require('./webpack.base.con.js');
Object.keys(webpackbase.entry).forEach((name) => {
    webpackbase.entry = ['./dev.client.js'].concat(webpackbase.entry[name]);
});
// console.log( webpackbase.entry);
module.exports = merge(webpackbase, {
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
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
