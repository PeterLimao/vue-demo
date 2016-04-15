<style>
    .header {
        color: blue;
    }
</style>
<template>
    <div class="header">
        <input type="text" v-model="msg">
        <button type="button" v-on:click="notify">DisPatch Msg</button>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                msg: 'hello'
            }
        },
        methods: {
            notify: function() {
                var msg = this.msg;
                this.$dispatch('child-msg', msg);
                this.msg = '';
            }
        }
    };
</script>
