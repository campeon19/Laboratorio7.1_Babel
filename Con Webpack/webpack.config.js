const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Chunk } = require('webpack');

module.exports = {
    entry: {
        index:"./src/start-index.js",
        capitulo1:"./src/start-cap1.js",
        capitulo2:"./src/start-cap2.js",
        capitulo3:"./src/start-cap3.js",
        capitulo4:"./src/start-cap4.js",

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
      },
    plugins: [new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin({
        template: "./src/home/index.html",
        filename: "index.html",
        chunks: ["start-index"]
    }),new HtmlWebpackPlugin({
        template: "./src/capitulo1/capitulo1.html",
        filename: "capitulo1.html",
        chunks: ["start-cap1"]
    }), new HtmlWebpackPlugin({
        template: "./src/capitulo2/capitulo2.html",
        filename: "capitulo2.html",
        chunks: ["start-cap2"]
    }), new HtmlWebpackPlugin({
        template: "./src/capitulo3/capitulo3.html",
        filename: "capitulo3.html",
        chunks: ["start-cap3"]
    }), new HtmlWebpackPlugin({
        template: "./src/capitulo4/capitulo4.html",
        filename: "capitulo4.html",
        chunks: ["start-cap4"]
    })],
    module: {
        rules: [
            {   test: /\.css$/i, use: ['style-loader', 'css-loader'],}, 
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            },
        ],
    },
};