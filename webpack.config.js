const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "production",
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: "Hui",
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "deUI",
            template: "index.html"
        })
    ]
}