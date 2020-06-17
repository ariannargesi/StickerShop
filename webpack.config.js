const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
           }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
}
