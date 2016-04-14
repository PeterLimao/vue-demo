<style>
    .header {
        color: blue;
    }
</style>
<template>
    <div class="header">
        {{message}}
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                message: 'header'
            }
        }
    };
</script>
