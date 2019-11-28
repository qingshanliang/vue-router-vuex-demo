const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production'
    return {
        entry: './src/main.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {}
                    }
                },
                {
                    test:/\.css$/,
                    use:['style-loader','css-loader']
                }

            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: "./index.html",
                favicon: './src/image/ico/favicon.ico'
            })
        ]
    }
};
