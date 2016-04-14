<style>
    .footer {
        color: blue;
    }
</style>
<template>
    <div class="footer">
        {{message}}
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                message: 'footer'
            }
        }
    };
</script>
