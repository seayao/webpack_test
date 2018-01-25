## 整个系列总结

### 如何将js文件模块化

    #### module.exports require()
    #### 自定义文件引入时需要使用./
    #### npm下载的文件不需要./

### 如何使用第三方
    #### 1.在npm服务器中下载第三方(如jquery)
    #### 2.require()第三方

### 如何将静态文件模块化

    #### 1.创建css文件
    #### 2.下载对应的装载器
    #### 3.修饰css文件 !style-loader!css-loader!

### 如何配置webpack.config.js

    #### 出口文件
    #### 入口文件
    #### 模块
    #### 加载器

### 如何使用package.json启动项目

    #### scripts "build" "start"

### 如何将es6转成es5

    #### babel-core、babel-loader、babel-preset-es2015