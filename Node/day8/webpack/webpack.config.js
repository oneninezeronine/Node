// node内置模块，专门去处理路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 开发模式，生产模式 production or development
    // 开发环境会自动匹配非压缩的jquery.js
    // 生产环境会匹配压缩版本
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 输出的文件名为 bundle打包后的模块文件
        filename: 'bundle.js',
        // 输出的位置
        path: path.resolve(__dirname, 'dist')
    },
    // 加载器
    module: {
        rules: [{
            test: /\.txt$/,
            use: 'raw-loader'
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 服务器
    devServer: {
        // 服务器文件夹位置
        contentBase: path.join(__dirname, "dist"),
        // 压缩
        compress: true,
        // 端口
        port: 9000
    }
};