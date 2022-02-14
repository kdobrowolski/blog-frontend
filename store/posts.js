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
    const accessToken = Cookie.get('access_token');
    console.log(payload);
    const res = await this.$axios.$post('/api/post',
      payload, { headers: { Authorization: `Bearer ${accessToken}` }, progress: false });
  },

  async getPosts ({ commit }, payload) {
    const posts = await this.$axios.$get('/api/post', { progress: false });
    commit ('SET_POSTS', posts);
  },

  async deletePosts ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    await this.$axios.$delete(`/api/post/${payload}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        progress: false
      });
  },

  async getOnePost ({ commit }, payload) {
    return await this.$axios.$get(`/api/post/${payload}`);
  },

  async editPost ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    const res = await this.$axios.$put(`/api/post/${payload.post_id}`, payload,
      { headers: { Authorization: `Bearer ${accessToken}` }, progress: false});
  },

  async addReaction ({ commit }, payload) {
    return await this.$axios.$post(`/api/reaction/${payload.postId}`, payload.reaction, { progress: false });
  },

  async getReaction ({ commit, rootGetters }, payload) {
    const ip = rootGetters.getIp;
    console.log(ip);
    return await this.$axios.$get(`/api/reaction/${payload.id}/${ip}`, { progress: false });
  },

  async deleteReaction ({ commit }, payload) {
    console.log(payload.reaction);
    return await this.$axios.$delete(`/api/reaction/${payload.postId}`, {data: payload.reaction}, { progress: false });
  }
}
