<template>
</template>


<script>
    import swal from "sweetalert2"
    export default {
        name: 'Note',
        props: ["note"],
        data() {
            return {}
        },
        computed: {},
        methods: {
            deleteNote(noteId) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "this note will be deleted",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'delete!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Deleted!',
                        )
                    }
                })
            },
            setCurrentNote(noteId) {
                this.$store.dispatch("setCurrentNote", noteId)
            }
        },
        components: {

        }
    }
</script>


<style scoped>
</style>