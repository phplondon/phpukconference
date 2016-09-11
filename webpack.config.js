var webpack = require("webpack");

module.exports = {
    entry: "./assets/javascripts/main.js",
    output: {
        path: __dirname + '/assets/js',
        filename: "script.js"
    },
    externals: {
        "jquery": "jQuery",
        'google': 'google'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};

