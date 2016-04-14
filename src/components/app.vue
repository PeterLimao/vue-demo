<style>
    .app {
        background: #ff0000;
    }
</style>
<template>
    <div class="app">
        <v-header></v-header>
        <v-footer></v-footer>
    </div>
</template>
<script>
    var header = require('./header');
    var footer = require('./footer');

    module.exports = {
        components: {
            'v-header': header,
            'v-footer': footer
        }
    };
</script>
