<template>
    <div class="app">
        <v-header></v-header>
        <v-footer></v-footer>
    </div>
</template>

<script>
    var header = require('./header.vue');
    var footer = require('./footer.vue');

    module.exports = {
        components: {
            'v-header': header,
            'v-footer': footer
        }
    };
</script>
