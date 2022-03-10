
export const state = () => ({
  userIp: null,
  aboutMeContent: null
});

export const mutations = {
  SET_IP (state, ip) {
    state.userIp = ip;
  },
  SET_ABOUT_ME_CONTENT (state, content) {
    state.aboutMeContent = content;
  }
};

export const getters = {
  getIp (state) {
    return state.userIp;
  },
  getAboutMeContent (state) {
    return state.aboutMeContent;
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, commit }, ctx) {
    const req = ctx.req;
    const headers = (req && req.headers) ? Object.assign({}, req.headers) : {}
    const xForwardedFor = headers['x-forwarded-for'];
    const xRealIp = headers['x-real-ip'];
    commit('SET_IP', xForwardedFor | xRealIp);
    const path = await ctx.route.path;
    if (!path.match(/admin.*/)) return;
    try {
      await dispatch('users/checkRefreshToken', ctx);
    } catch (error) {
      ctx.redirect('/admin/login');
    }
  },

  async sendEmail ({ commit }, payload) {
    await this.$axios.$post('/api/sendEmail', payload, { progress: false });
  },

  async getAboutMe ({ commit }) {
    const res = await this.$axios.$get('/api/author', { progress: false });
    commit('SET_ABOUT_ME_CONTENT', res.content);
  },

  async editAboutMe ({ commit }, payload) {
    const data = {
      content: payload
    }
    await this.$axios.$put('/api/author', data, { progress: false });
  }
};
