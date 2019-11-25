const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    resolve: {
        extensions: ['.js', '.jsx'], //后缀名自动补全,可以使用jsx的文件后缀
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,//源文件改变,会自动刷新页面
        port: 1234,//设置默认监听端口，如果省略，默认为"8080"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    }
                }
            },
            {
                test: /index\.html/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name (file) {
                            return 'index.[ext]'
                        }
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        //outputStyle: 'expanded',
                        //sourceMapContents: true
                    }
                }]
            },
            {
                test: /\.less$/,
                use:
                    [{
                        loader: 'style-loader'
                    },{
                        loader: 'css-loader'
                    },{
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        }
                    }]
            }
        ]
    },
};