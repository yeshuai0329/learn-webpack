const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  mode: 'development',
  // 入口文件位置
  entry: [path.resolve(__dirname, './src/index.tsx')],
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist')
  },

  // 模块解析
  module: {
    // 规则
    rules: [
      { test: /\.tsx?$/, use: ['awesome-typescript-loader'] },
      {
        test: /(\.css)|(\.less)$/i,
        use: ['style-loader', 'css-loader', 'less-loader',]
      },
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/i,
        use: ["file-loader"]
      }
    ]
  },
  // 插件
  plugins: [
    // 每次打包先删除dist文件夹,  再生成dist文件夹
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    // contentBase: './dist',
    compress: true,
    hot: true,
    client: {
      logging: 'none',
      progress: true,
    },
  },
  devtool: 'source-map',
}