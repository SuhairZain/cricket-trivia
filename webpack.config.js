/* eslint-env commonjs*/

const fs = require('fs');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = require('get-env')();

const PROD = env === 'prod';

const links = [
    'https://fonts.googleapis.com/css?family=Roboto:100,400',
    `${PROD ? '' : '/'}css/styles.css`,
];

const plugins = [
    new HtmlWebpackPlugin({
        filename: '../index.html',
        links: links,
        template: 'index-file-template.ejs',
        title: 'Cricket Trivia',
    }),
];

const outputDir = 'dist';

if (PROD) {
    fs.readdirSync(`./${outputDir}`).forEach((filename) => {
        fs.unlinkSync(`./${outputDir}/${filename}`);
    });

    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    );
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        })
    );
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: './dist',
        publicPath: `${PROD ? '' : '/'}dist/`,
        filename: `bundle${PROD ? '_' + new Date().getTime() : ''}.js`,
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
        }],
    },
    plugins: plugins,
};
