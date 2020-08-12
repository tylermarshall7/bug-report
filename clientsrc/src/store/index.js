import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService"

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    bugDetails: {},
    currentNote: {},
    notes: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs;
    },
    setBugDetails(state, bugDetails) {
      state.bugDetails = bugDetails;
    },
    setNotes(state, notes) {
      state.notes = notes
      console.log('notes', state.notes)
    },
    setCurrentNote(state, currentNote) {
      state.currentNote = currentNote
    }

  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    getAllBugs() {
      api.get('bugs')
        .then(res => {
          this.commit('setBugs', res.data)
        })
    },

    async addBug({ commit, dispatch }, payload) {
      try {
        let res = await api.post("bugs", payload)
        dispatch("getAllBugs")
        router.push({ name: 'Bug', params: { bugId: res.data._id } })

      } catch (error) {
        console.error(error)
      }
    },

    async addComment({ commit, dispatch }, payload) {
      try {
        let res = await api.post("notes", payload)
        dispatch("getNotesByBugId", payload.bugId)
        console.log('added comment', payload)
      } catch (error) {
        console.error(error)
      }
    },

    setBugDetails({ commit, dispatch, state }, bugId) {
      let currentPost = this.state.bugs.find(bug => bugId == bug.id);
      commit("setBugDetails", currentPost)
      dispatch("getNotesByBugId", bugId)
    },

    setCurrentComment({ commit, dispatch, state }, commentId) {
      let currentComment = this.state.notes.find(comment => commentId == comment.id)
      commit("setCurrentComment", currentComment)
    },

    async getCommentsByBug({ commit, dispatch, state }, bugId) {
      try {
        this.state.notes = []
        let notes = await api.get("bugs/" + bugId + "/notes")
        commit("setComments", notes.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBug({ commit, dispatch, state }, bugId) {
      try {
        await api.delete("bugs/" + bugId)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({ commit, dispatch, state }, commentId) {
      try {
        await api.delete("notes/" + commentId)
        dispatch("getNotesByBugId", this.state.bugDetails.id)
      } catch (error) {
        console.error(error)
      }
    },
    async editBug({ commit, dispatch }, payload) {
      try {
        let res = await api.put("bugs/" + payload.bugId, payload)
        commit("setBugDetails", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async closeBug({ commit, dispatch }, payload) {
      try {
        let res = await api.put("bugs/" + payload.bugId, payload)
        commit("setBugDetails", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async editNote({ commit, dispatch }, payload) {
      try {
        let res = await api.put("notes/" + payload.id, payload)
        dispatch("getNoteByBugId", payload.bugId)
      } catch (error) {
        console.error(error)
      }
    }

  }
});
