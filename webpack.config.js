const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode: "production",
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
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
        },{
            test: /\.svg$/,
            loader: 'svg-sprite-loader'
        },{
            test: /\.scss$/,
            use:['style-loader', 'css-loader', 'sass-loader']
        }]
    },
   /*  plugins: [
        new HTMLWebpackPlugin({
            title: "deUI",
            template: "index.html"
        })
    ], */
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
}