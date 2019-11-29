const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    /*入口*/
    entry: {
        app:[
            path.join(__dirname, '../src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'production',
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },
    resolve: {
        alias: {
            app: path.join(__dirname, '../src/app'),
            components: path.join(__dirname, '../src/components'),
            layouts: path.join(__dirname, '../src/layouts'),
            actions: path.join(__dirname, '../src/actions'),
            reducers: path.join(__dirname, '../src/reducers'),
            images: path.join(__dirname, '../src/images'),
        }
    },


    /*src目录下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }, {
            test: /\.css$/,
            use: 
            [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader',
                'postcss-loader'
            ]
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },



    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({ // 压缩css
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin()
    ],


    devtool: 'none',

    // webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,  // gzip压缩
        host: '127.0.0.1', // 允许ip访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        proxy: { // 配置服务代理
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '' },  //可转换
                changeOrigin: true
            }
        },
        port: 8000 // 端口
    },


    /*输出到dist目录，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    }
};
