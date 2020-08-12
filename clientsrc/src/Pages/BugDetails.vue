<template>
    <div class="bugDetails container bg-secondary">
        <div class="row">
            <h1 class="col-7">{{bugDetails.title}} </h1>
            <button v-show="!bugDetails.closed" type="button" class="btn btn-info" data-toggle="modal"
                data-target="#editBugModal">Edit</button>
            <button v-show="!bugDetails.closed" class="btn" @click="closeBug(bugDetails.id)">Close</button>
            <div v-show="bugDetails.closed" class="col-2  btn btn-primary">Bug is Closed</div>
        </div>
        <h5>{{bugDetails.name}}</h5>
        <p> {{bugDetails.description}}</p>
        <h5> Notes </h5>
        <notes v-for="noteItem in notes" :notes="noteItem" :key="noteItem.id"></notes>

        <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#noteModal">
            Add Note
        </button>





        <form @submit.prevent="addNote(newNote)">
            <div class="modal fade" id="noteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Report Bug</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Note
                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="enter note..."
                                    v-model="newNote.notes">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>


        <form @submit.prevent="bugToEdit(editBug)">
            <div class="modal fade" id="editBugModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Bug</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Your Name
                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="enter your Name..."
                                    v-model="editBug.name">
                            </div>
                            Title
                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="enter Title..."
                                    v-model="editBug.title">
                            </div>
                            Description
                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="enter description..."
                                    v-model="editBug.description">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save Edits</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <form @submit.prevent="noteToEdit(editNote)" class="modal fade" id="editNoteModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Note
                        <div class="input-group">

                            <input type="text" class="form-control" placeholder="enter Note..."
                                v-model="editNote.content">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Edit Note</button>
                    </div>
                </div>
            </div>
        </form>


    </div>



</template>


<script>
    import Note from "../components/Note"
    export default {
        name: 'bugDetails',
        props: ["notes", "noteItem"],
        data() {
            return {
                newnote: {},
                editBug: {},
                editNote: {},
            }
        },
        mounted() {
            this.$store.dispatch("setBugDetails", this.$route.params.bugId)
        },
        computed: {
            bugDetails() {
                return this.$store.state.bugDetails;
            },
            notes() {
                return this.$store.state.notes;
            }
        },
        methods: {
            addNote(newNote) {
                this.$store.dispatch("addNote", {
                    content: this.newNote.note,
                    bugId: this.$route.params.bugId,
                    creatorEmail: this.$store.state.profile.email
                })
                $("#noteModal").modal("hide");
            },
            bugToEdit(editBug) {
                this.$store.dispatch('editBug', {
                    title: this.editBug.title,
                    description: this.editBug.description,
                    name: this.editBug.name,
                    bugId: this.$route.params.bugId
                })
                $("#editBugModal").modal("hide");
            },

            closeBug(Id) {
                swal.fire({
                    title: 'Are you sure?',
                    text: "Once completed it cannot be undone",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, complete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.value) {
                        this.$store.dispatch('editBug', {
                            bugId: Id,
                            closed: true,
                        })
                        this.$router.push({ name: "Home", path: "/" });
                        swal.fire(
                            'success'
                        )
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swal.fire(
                            'Cancelled'
                        )
                    }
                })
            },

            noteToEdit(editNote) {
                this.$store.dispatch('editNote', {
                    content: this.editNote.content,
                    bugId: this.$route.params.bugId,
                    id: this.$store.state.currentNote.id
                })
            },

        },
        components: {
            Note,
        }
    }
</script>


<style scoped>
</style>