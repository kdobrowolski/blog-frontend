import Cookie from 'js-cookie';

export const state = () => ({
  posts: []
})

export const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts;
  }
}

export const getters = {
  getPosts (state) {
    return state.posts;
  }
}

export const actions = {
  async createPost ({ commit }, payload) {
    const res = await this.$axios.$post('/api/post',
      payload, { progress: false });
  },

  async getPosts ({ commit }, payload) {
    const posts = await this.$axios.$get('/api/post', { progress: false });
    commit ('SET_POSTS', posts);
  },

  async deletePosts ({ commit }, payload) {
    await this.$axios.$delete(`/api/post/${payload}`,
      {
        progress: false
      });
  },

  async getOnePost ({ commit }, payload) {
    return await this.$axios.$get(`/api/post/${payload}`);
  },

  async editPost ({ commit }, payload) {
    const res = await this.$axios.$put(`/api/post/${payload.post_id}`, payload,
      { progress: false});
  },

  async addReaction ({ commit }, payload) {
    return await this.$axios.$post(`/api/reaction/${payload.postId}`, payload.reaction, { progress: false });
  },

  async deleteReaction ({ commit }, payload) {
    return await this.$axios.$delete(`/api/reaction/${payload.postId}`, { data: payload.reaction }, { progress: false });
  },

  async getUserReaction ({ commit }, payload) {
    const { reactionType } = await this.$axios.$get(`/api/reaction/${payload.postId}/${payload.userIp}`, { progress: false });

    return reactionType;
  }
}
