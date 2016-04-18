<style lang="less">
    #bar1 {
        height: auto;
        background: red;
        color: #fff;
        ul {
            li {
                display: block;
            }
        }
    }
</style>
<template>
    <div id="bar1">
        This is first bar
        <p>
            routerMsg: <br>
            <ul>
                <li v-for="msg in routerMsg">
                    {{msg.key}}: {{msg.value}}
                </li>
            </ul>
        </p>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                routerMsg: [
                    {key: '$route.path', value: this.$route.path},
                    {key: '$route.params', value: this.$route.params},
                    {key: '$route.query', value: this.$route.query},
                    {key: '$route.router', value: this.$route.router},
                    {key: '$route.matched', value: this.$route.matched}
                ]
            }
        }
    };
</script>
