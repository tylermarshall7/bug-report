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
            date() {
                let date = this.bug.updatedAt
                let newdate = date.slice(0, 10)
                return newdate
            }
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