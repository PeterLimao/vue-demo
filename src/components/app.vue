<style lang="less">
    /* 必需 */
    .expand-transition {
        transition: all .3s ease;
        height: 300px;
        padding: 10px;
        background-color: #eee;
        overflow: hidden;
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }
</style>
<template>
    <div class="app">
        <v-header v-show="header.show" transition="expand"></v-header>
        <div>
            <button type="button" v-on:click="setHeader">{{btn.header}}</button>
            <button type="button" v-on:click="setFooter">{{btn.footer}}</button>
            {{messages | json}}
        </div>
        <v-footer v-show="footer.show" transition="expand"></v-footer>
    </div>
</template>
<script>
    var header = require('./header');
    var footer = require('./footer');

    module.exports = {
        components: {
            'v-header': header,
            'v-footer': footer
        },
        data: function() {
            return {
                header: {
                    show: true
                },
                btn: {
                    header: 'show header',
                    footer: 'show footer'
                },
                footer: {
                    show: true
                },
                messages: []
            }
        },
        methods: {
            setHeader: function() {
                this.header.show = !this.header.show;
            },
            setFooter: function() {
                this.footer.show = !this.footer.show;
            }
        },
        events: {
            'child-msg': function(msg) {
                this.messages.push(msg);
            }
        }
    };
</script>
