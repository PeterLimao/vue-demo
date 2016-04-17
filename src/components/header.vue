<style>
    .header {
        color: blue;
    }
</style>
<template>
    <div class="header">
        <ul>
            <li v-for="msg in msgs">
                {{msg.message}}
            </li>
        </ul>
        <div>
            <input type="text" v-model="inputMsg">
            <button type="button" v-on:click="add">添加</button>
            <button type="button" v-on:click="delete">删除</button>
        </div>
    </div>
</template>
<script>
    var actions = require('actions');

    module.exports = {
        data: function() {
            return {
                inputMsg: ''
            }
        },
        vuex: {
            getters: {
                getMsgList: function(state) {
                    return state.messages;
                }
            },
            actions: {
                configList: actions.configList
            }
        },
        computed: {
            msgs: function() {
                return this.getMsgList;
            }
        },
        methods: {
            add: function() {
                var _self = this;
                this.configList(true, {
                    message: _self.inputMsg
                });
                this.inputMsg = '';
            },
            delete: function() {
                this.configList(false);
            }
        }
    };
</script>
