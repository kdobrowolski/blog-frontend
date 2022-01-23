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
    const res = await this.$axios.$post('/api/posts',
      payload, { headers: { Authorization: `Bearer ${accessToken}` }, progress: false });
  },

  async getPosts ({ commit }, payload) {
    const posts = await this.$axios.$get('/api/posts', { progress: false });
    commit ('SET_POSTS', posts);
  },

  async deletePosts ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    await this.$axios.$delete(`/api/posts/${payload}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        progress: false
      });
  },

  async getOnePost ({ commit }, payload) {
    return await this.$axios.$get(`/api/posts/${payload}`);
  },

  async editPost ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    const res = await this.$axios.$put(`/api/posts/${payload.post_id}`, payload.postContent,
      { headers: { Authorization: `Bearer ${accessToken}` }, progress: false});
  },

  async addReaction ({ commit }, payload) {
    
    return await this.$axios.$put(`/api/reactions/${payload.postId}`, payload.reaction, { progress: false });
  },

  async getReaction ({ commit, rootGetters }, payload) {
    const ip = rootGetters.getIp;
    return await this.$axios.$post(`/api/reactions/${payload}`, { user_ip: ip }, { progress: false });
  },

  async deleteReaction ({ commit }, payload) {
    console.log(payload.reaction);
    return await this.$axios.$delete(`/api/reactions/${payload.postId}`, {data: payload.reaction}, { progress: false });
  }
}
