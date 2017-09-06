<template>
    <div id="app" v-cloak>
        <h1>lalala...</h1>
        <p>666</p>
        <img src="../../assets/logo.png">
        <Test></Test>
        <router-view></router-view>
    </div>
</template>

<script>
    import Test from './components/test.vue'
    export default {
        name: 'app',
        components: {
            Test
        }
    }
</script>

<style>
    [v-cloak] { display: none; }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
