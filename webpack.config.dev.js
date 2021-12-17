const base = require('./webpack.config')
const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: "development",
   
     plugins: [
        new HTMLWebpackPlugin({
            title: "deUI",
            template: "index.html"
        })
    ], 
   /*  externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM'
        }
    } */
})