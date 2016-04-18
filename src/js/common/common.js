var vue = require('vue');
var vuex = require('vuex');
var vueResource = require('vue-resource');
var vueRouter = require('vue-router');

vue.use(vuex);
vue.use(vueRouter);
vue.use(vueResource);
vue.config.debug = true;
vue.config.devtools = true;

module.exports = {
    vue: vue,
    vuex: vuex,
    vueRouter: vueRouter,
    vueResource: vueResource
};
