const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./build/webpack.dev.con.js');
const compiler = webpack(webpackConfig);
const app = express();
const devMiddleware = require('webpack-dev-middleware')(compiler);
const HotdevMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000
});

app.use(devMiddleware);
app.use(HotdevMiddleware);
app.listen(3333);
// console.log(webpack); // 观察小黑板 entry pulgin .. 都有
