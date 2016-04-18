var webpack = require('webpack');

var bowerPath = process.cwd() + '/bower_components';
//别名配置
var myAlias = {
    routerConfig: process.cwd() + '/src/js/common/router/routerConfig',
    components: process.cwd() + '/src/components',
    actions: process.cwd() + '/src/js/common/vuex/actions.js',
    common: process.cwd() + '/src/js/common/common.js',
    mutations: process.cwd() + '/src/js/common/vuex/mutations',
    state: process.cwd() + '/src/js/common/vuex/state.js',
    store: process.cwd() + '/src/js/common/vuex/store.js'
};

module.exports = {
    devTool: 'source-map',
    entry: {
        'index1': ['./src/js/main/index1.js'],
        'index2': ['./src/js/main/index2.js']
    },
    output: {
        publicPath: process.cwd() + '/dist/assets/js/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json', '.less'],
        alias: myAlias
    },
    plugins: [
        new webpack.ProvidePlugin({}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
