<template>
    <div>
        {{name}}
        <div>
            <button @click="myActionTabTwo()">submit action</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabTwo",
        computed: {
            name () {
                return this.$store.state.tabTwo
            },
        },
        methods:{
            myActionTabTwo(){
                return this.$store.dispatch('myActionTabTwo')
            }
        }
    }
</script>

<style scoped>

</style>
