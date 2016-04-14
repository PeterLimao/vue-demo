var webpack = require('webpack');

var bowerPath = './bower_components';

module.exports = {
    devTool: 'source-map',
    entry: {
        'index1': ['./src/js/index1.js'],
        'index2': ['./src/js/index2.js']
    },
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json', '.less'],
        alias: {
            jquery: bowerPath + '/jquery/dist/jquery.min.js',
            bootstrap: bowerPath + './bower_components/bootstrap/dist/js/bootstrap.min.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            bootstrap: 'bootstrap'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
