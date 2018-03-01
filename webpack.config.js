const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: __dirname + '/dist/index.html',
        hot: true,
        // hotOnly: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '(Dev) Chess',
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    entry: {
        app:"./src/app.tsx",
        // vendor: ["react", "react-dom", "chess.js"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                use: [{
                    loader: 'babel-loader',
                    options: { plugins: ['react-hot-loader/babel'] }
                },
                {
                    loader: 'ts-loader',
                    options: { transpileOnly: true }
                }], 
                
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: { sourceMaps: true }
                }, {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: { sourceMaps: true }
                }]
            }
        ]
    },
    externals: {
        // "react": "React",
        // "react-dom": "ReactDOM",
        // "chess.js": "Chess"
    }
}