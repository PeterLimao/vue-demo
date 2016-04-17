module.exports = function(router) {
    router.map({
        'header': {
            component: require('components/header')
        },
        'footer': {
            component: require('components/footer')
        }
    });
};
