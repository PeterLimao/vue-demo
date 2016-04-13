var vue = require('vue');
var App = require('./components/app.vue');

new vue({
    el: 'body',
    components: {
        app: App
    }
});
