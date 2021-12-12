const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  assetsDir: process.env.assetsDir,
  publicPath: process.env.publicPath,
  devServer: {
    port: 8080,
  },
  productionSourceMap: false,
  transpileDependencies: [
    "vuetify"
  ],
  pages: {
    index: {
      entry: "examples/main.js", //入口文件
      template: "public/index.html",
      filename: "index.html"
    }
  },
  // 组件样式内联
  css: {
    extract: false
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('~', resolve('packages'))
    config.module
      .rule('eslint')
      .exclude.add(path.resolve('lib'))
      .end()
      .end()

    config.module
      .rule('js')
      .include.add('/packages/').end()
      .include.add('/examples/').end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}