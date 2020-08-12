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
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
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