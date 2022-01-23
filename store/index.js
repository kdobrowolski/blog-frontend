
export const state = () => ({
  user_ip: null,
  about_me_content: null
});

export const mutations = {
  SET_IP (state, ip) {
    state.user_ip = ip;
  },
  SET_ABOUT_ME_CONTENT (state, content) {
    state.about_me_content = content;
  }
};

export const getters = {
  getIp (state) {
    return state.user_ip;
  },
  getAboutMeContent (state) {
    return state.about_me_content;
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, commit }, ctx) {
    const req = ctx.req;
    const headers = (req && req.headers) ? Object.assign({}, req.headers) : {}
    const xForwardedFor = headers['x-forwarded-for'];
    const xRealIp = headers['x-real-ip'];
    commit('SET_IP', xForwardedFor || xRealIp);
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
    const res = await this.$axios.$get('/api/aboutMe', { progress: false });
    commit('SET_ABOUT_ME_CONTENT', res.content);
  },

  async editAboutMe ({ commit }, payload) {
    await this.$axios.$put('/api/aboutMe', payload, { progress: false });
  }
};
