<template>
    <div id="app">
        <router-link to="/home">Home</router-link>
        <router-link to="/tabOne">tabOne</router-link>
        <router-link to="/tabTwo">tabTwo</router-link>
        <router-link to="/about">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>

</style>
