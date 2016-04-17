var common = require('common');
var store = require('store');
var app = require('../../components/app');

new common.vue({
    el: 'body',
    store: store,
    components: {
        app: app
    }
});
