<template>
    <div>

        <div v-show="!bug.closed" class="Bug row" @click="viewBug(bug.id)">

            <div class="col-3 bg-white border">
                <h5>{{bug.title}}</h5>
            </div>
            <div class="col-3 bg-white border">
                <h5>{{bug.name}}</h5>
            </div>
            <div v-show="!bug.closed" class="col-3 bg-white border">
                <h5>Open</h5>
            </div>
            <div class="col-3 bg-white text border">
                <h5>{{new Date(bug.updatedAt).toLocaleString()}}</h5>
            </div>

        </div>


        <div v-show="bug.closed" class="Bug row bg-warning" @click="viewBug(bug.id)">
            <div class="col-3  border">
                <h5>{{bug.title}}</h5>
            </div>
            <div class="col-3 border">
                <h5>{{bug.name}}</h5>
            </div>
            <div class="col-3 border">
                <h5>Closed</h5>
            </div>
            <div class="col-3 border">
                <h5> {{date}} </h5>
            </div>
        </div>
    </div>
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

            }
        },
        methods: {
            viewBug(id) {
                this.$router.push({ name: 'BugDetails', params: { bugId: id } })
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>