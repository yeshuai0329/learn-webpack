# learn webpack
## 1. 目标
> 1. 基于 webpack5.0 学习, 深入学习webpack的使用以及 `webpack` 的原理, 详细文档请看: [webpack官网](https://webpack.docschina.org/concepts/)
> 2. 从 0 到 1 构建一个基于 `react-ts-eslint-webpack` 的应用
> 3. 学习 `Typescript` 语法, 以及在如何在已有的项目中加入 `Typescript` 并且配置 `Typescript`

## 2. 初始化项目
### 2.1 创建项目文件夹
```bash
$ mkdir learn-webpack  // learn-webpack 是创建的项目文件夹
$ cd learn-webpack  // learn-webpack 项目文件夹
$ mkdir public // 创建静态资源文件夹
$ mkdir src // 创建src文件夹
```

### 2.2 git 管理文件夹
```bash
$ git init 
$ touch .gitignore // 添加git忽略文件
```

### 2.3 初始化项目
```bash
$ npm init -y // 初始化项目,生成package.json文件,记录项目信息以及项目包依赖
```
## 3. 引入 `webpack`,  配置打包项目
### 3.1 引入依赖
```bash
$ npm i webpack webpack-cli -D
or
$ yarn add webpack webpack-cli -D
```
### 3.2 创建 webpack 配置文件
```bash 
$ mkdir webpack.config.js // 项目根目录创建 webpack.config.js 文件
```

