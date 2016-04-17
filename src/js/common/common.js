var vue = require('vue');
var vuex = require('vuex');
var vueRouter = require('vue-router');

vue.use(vuex);
vue.use(vueRouter);
vue.config.debug = true;

module.exports = {
    vue: vue,
    vuex: vuex,
    vueRouter: vueRouter
};
