<style lang="less">
    #footer {
        background-color: #d8d8d8;
        font-size: 16px;
        font-weight: 400;
        height: 5.1rem;
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
    </div>
</template>
<script>
    module.exports = {
        el: function() {
            return '#footer';
        },
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
        }
    };
</script>
