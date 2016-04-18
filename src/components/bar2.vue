<style>
    #bar2 {
        height: 50px;
        background: green;
        color: #fff;
    }
</style>
<template>
    <div id="bar2">
        This is second bar
        <div v-if="$loadingRouteData">
            loading........
        </div>
        <div v-if="!$loadingRouteData">
            {{msg}}
        </div>
    </div>
</template>
<script>
    module.exports = {
        route: {
            data: function(transition) {
                setTimeout(function() {
                    transition.next({
                        msg: 'data get!'
                    });
                }, 1000);
            }
        }
    };
</script>
