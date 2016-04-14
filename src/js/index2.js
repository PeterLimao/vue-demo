var common = require('./common');
var App = require('../components/app');

new common.vue({
    el: 'body',
    components: {
        app: App
    }
});
