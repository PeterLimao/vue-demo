module.exports = function(router) {
    router.map({
        '/header': {
            component: function(resolve) {
                require.ensure(['components/header'], function() {
                    resolve(require('components/header'));
                });
            }
        },
        '/footer': {
            component: function(resolve) {
                require.ensure(['components/footer'], function() {
                    resolve(require('components/footer'));
                });
            },
            subRoutes: {
                '/bar1': {
                    component: function(resolve) {
                        require.ensure(['components/bar1'], function() {
                            resolve(require('components/bar1'));
                        });
                    }
                },
                '/bar2': {
                    component: function(resolve) {
                        require.ensure(['components/bar2'], function() {
                            resolve(require('components/bar2'));
                        });
                    }
                }
            }
        }
    });
};
