var Vue = require('vue');

Vue.config.debug = true;
Vue.transition('expand', {
    beforeEnter: function(el) {
        console.log('beforeEnter');
    },
    enter: function() {
        console.log('enter');
    },
    afterEnter: function() {
        console.log('afterEnter');
    },
    enterCancled: function() {
        console.log('enterCancled');
    }
});

module.exports = {
    'Vue': Vue
};
