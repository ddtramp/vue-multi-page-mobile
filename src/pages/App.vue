<template>
    <div id="app">
        <h1>Apache Cordova</h1>
        <div id="deviceready" class="blink">
            <p class="event listening">Connecting to Device</p>
            <p class="event received">Device is Ready</p>
        </div>

        <p class="title">{{ d }}</p>
        <ul>
            <li><a href="/pages/contact.html">contact</a></li>
            <li><a href="/pages/home.html">home</a></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>

    .title { text-align: center; }
    ul {
        list-style-type: none;
        li { margin: 14px 10px; }
    }

</style>
<script>
    export default {
        name: 'app',
        data () {
            return {
                d: 'This is test index page...'
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
