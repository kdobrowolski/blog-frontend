
export const state = () => ({
  comments: []
})

export const mutations = {
  SET_COMMENTS (state, comments) {
    const reverseComments = comments.reverse();
    state.comments = reverseComments;
  },
}

export const getters = {
  getComments (state) {
    return state.comments;
  }
}

export const actions = {
  async createComment ({ commit, dispatch }, payload) {
    await this.$axios.$post(`/api/comments/${payload.postId}`, payload.comment, { progress: false });
    await dispatch('getComments', payload.postId);
  },

  async getComments ({ commit }, payload) {
      const res = await this.$axios.$get(`/api/comments/${payload}`, { progress: false });
      commit('SET_COMMENTS', res.comments);
  },

  async deleteComment ({ commit, dispatch }, payload) {
    await this.$axios.$delete(`api/comments/${payload}`, { progress: false })

    await dispatch('getComments');
  }
}