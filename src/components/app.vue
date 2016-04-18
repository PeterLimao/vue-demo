<template id="app">
    <div>
        <p>
            <a v-link="{path: '/header'}">Go Header</a>
            <a v-link="{path: '/footer'}">Go Footer</a>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    var store = require('store');

    module.exports = {
        store: store
    };
</script>
