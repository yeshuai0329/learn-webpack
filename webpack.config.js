const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // 入口文件位置
  entry: [path.resolve(__dirname, './src/index.tsx')],
  // 出口
  output: {
    path: path.resolve(__dirname,'dist')
  },
  // 插件
  plugins: [
    // 每次打包先删除dist文件夹,  再生成dist文件夹
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: 'entries',
    })
  ],
  // loader
  module: {
    rules:[
      {test: /\.tsx?$/, use: [{loader: 'awesome-typescript-loader'}] },
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      }

    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: 'source-map'
}