<style lang="less">
    #footer {
        background-color: #d8d8d8;
        font-size: 16px;
        font-weight: 400;
        ul {
            text-decoration: none;
            li {
                display: inline-block;
                a {
                    color: #fff;
                }
            }
        }
    }
</style>
<template>
    <div id="footer">
        <ul>
            <li v-for="i in list">
                <a href="{{i.href}}">{{i.text}}</a>
            </li>
        </ul>
        <div>
            <a v-link="{path: '/footer/bar1'}">Go bar1</a>
            <a v-link="{path: '/footer/bar2'}">Go bar2</a>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                list: [
                    {
                        text: 'Terms&Conditions',
                        href: '/account/1'
                    },
                    {
                        text: 'Help',
                        href: '/account/2'
                    },
                    {
                        text: 'English',
                        href: '/account/3'
                    }
                ]
            };
        },
        route: {
            activate: function(transition) {
                transition.next();
            },
            deactivate: function(transition) {
                transition.next();
            }
        }
    };
</script>
