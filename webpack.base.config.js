const path = require('path');


const config = {
    context: __dirname,
    resolve: {
        extensions: ['.scss', '.jsx', '.js'],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src/js/components'),
            path.resolve('./src'),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: ['babel-loader','eslint-loader'],
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: ['svg-url-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                use: 'url-loader?limit=100000',
            },
        ],
    },
    plugins: [],
};


module.exports = config;
