<template>
    <div>
        I am home
        <div>
            tabOne content:  {{tabOne}}
        </div>
        <div>
            tabTwo content:  {{tabTwo}}
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "home",
        computed: {
            ...mapState([
                'tabOne','tabTwo'
            ])
        },
    }
</script>

<style scoped>

</style>
