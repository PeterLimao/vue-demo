var vue = require('vue');
var vuex = require('vuex');

vue.use(vuex);
vue.config.debug = true;

module.exports = {
    vue: vue,
    vuex: vuex
};
