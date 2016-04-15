var common = require('./common');
var App = require('../components/app');

new common.Vue({
    el: '#container1',
    components: {
        app: App
    }
});
