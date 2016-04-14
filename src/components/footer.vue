<style>
    .footer {
        height: 5rem;
        width: 100%;
        color: #fff;
        background-color: black;
    }
</style>
<template>
    <div class="footer">
        <ul>
            <li v-for="i in list">
                {{i.text}}
            </li>
        </ul>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
                list: [
                    {text: 'Terms&Conditions'},
                    {text: 'Help'},
                    {text: 'English'}
                ]
            }
        }
    };
</script>
