module.exports = {
    //入口文件
    entry: './src/js/app.js',
    //出口文件
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    //需要依赖的插件或者装载器
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    derServer: {
        port: 8899
    }
}
