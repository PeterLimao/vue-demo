var common = require('common');
var state = require('state');
var mutations = require('mutations');
var actions = require('actions');

var store = new common.vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});

module.exports = store;
