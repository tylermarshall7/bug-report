<template>
</template>


<script>
    export default {
        name: 'Bug',
        props: ["bug"],
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {
            viewBug(id) {
                this.$router.push({ name: 'Bug', params: { bugId: id } })
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>