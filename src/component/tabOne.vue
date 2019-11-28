<template>
    <div>
        {{tabOne}}
        <div>
            <button @click="myMutationTabOne">submit mutation</button>
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    export default {
        name: "tabOne",
        computed: {
            ...mapState([
                'tabOne'
            ])
        },
        methods:{
            // myMutationTabOne(){
            //     return this.$store.commit('myMutationTabOne')
            // },
            ...mapMutations([
                'myMutationTabOne'
            ])
        }
    }
</script>

<style>
    div{margin:50px auto;width:500px}
</style>
