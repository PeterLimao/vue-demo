var common = require('common');
var app = require('components/app');
var router = new common.vueRouter();
var routerConfig = require('routerConfig');

routerConfig(router);
router.start(app, '#app');
