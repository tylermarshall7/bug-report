<template>
  <div class="home">
    <div class="container">
      <div class="row text-center rounded">
        <h3 class="col-3 bg-success">Bug Reported</h3>
        <h3 class="col-3 bg-success">Reported By </h3>
        <h3 @click="bugStatus = !bugStatus" class="col-3 bg-success">Status (click to sort)</h3>
        <h3 class="col-3 bg-success">Last Changed</h3>
      </div>


      <bug v-for="bugItem in bugs" :bug="bugItem" :key="bugItem.id"></bug>
    </div>

<button class="btn" data-target="#bugModal" data-toggle="modal">create bug</button>
    <!-- Modal -->
    <form @submit.prevent="addBug(newBug)">
      <div class="modal fade" id="bugModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
              Your Name
              <div class="input-group mb-3">

                <input type="text" class="form-control" placeholder="enter your Name..." v-model="newBug.name">
              </div>
              Title
              <div class="input-group mb-3">

                <input type="text" class="form-control" placeholder="enter Title..." v-model="newBug.title">
              </div>
              Description
              <div class="input-group">

                <input type="text" class="form-control" placeholder="enter description..." v-model="newBug.description">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>


</template>

<script>
  import Bug from "../components/Bug"
  export default {
    name: "home",
    props: ["bug"],
    data() {
      return {

        bugStatus: true,
        newBug: {},

      }
    },
    mounted() {
      this.$store.dispatch("getAllBugs")
    },
    computed: {
      bugs() {

        if (this.bugStatus) {
          return this.$store.state.bugs.sort((a, b) => a.closed - b.closed)
        } else {
          return this.$store.state.bugs.sort((a, b) => b.closed - a.closed)
        }
      }
    },
    methods: {
      addBug(newBug) {
        this.$store.dispatch("addBug", {
          name: this.newBug.name,
          title: this.newBug.title,
          description: this.newBug.description,
          creatorEmail: this.$store.state.profile.email
        })
        $("#bugModal").modal("hide");
        this.$store.dispatch("getAllBugs")
      }
    },
    components: {
      Bug,
    }
  };
</script>