# webpack



webpack的插件
```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
]
```
上面这个插件就是帮你自动生成dist文件夹里里面的`index.html`

将网页应用使用服务器打开，全局安装该模块，它会拥有一个新的命令`webpack-dev-server`
```bash
npm install webpack-dev-server -g
```
```js
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}
```
之前打包使用`webpack`命令`webpack-dev-server`，打开`http://localhost:9000/`浏览网页