import Cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const state = () => ({
  user: null,
  moderators: null,
  access_token: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user;
  },

  SET_MODERATORS (state, moderators) {
    state.moderators = moderators;
  },
}

export const getters = {
  isLoggedIn (state) {
    return !!state.user;
  },

  getUser (state) {
    return state.user;
  },

  getModerators (state) {
    return state.moderators;
  },
}

export const actions = {
  async login ({ commit }, payload) {
    const { data } = await this.$axios.$post('/api/users/login', payload, { progress: false });
  },

  async authMe ({ state, commit, dispatch }, { app, accessToken }) {
    try {
      this.$axios.setToken(accessToken, 'Bearer');
      const { user } = await this.$axios.$get('/api/auth/me', { progress: false });
      commit ('SET_USER', user);
    } catch (error) {
      app.router.push('/admin/login');
  }
  },

  async checkRefreshToken ({ commit, dispatch }, { app, res }) {
    let path = app.router.history.current.path;
    let isLoginPath = false;
    if (path === '/admin/login') isLoginPath = true; 

    try {

      const accessToken = await app.$cookiz.get('access_token');

      const payload = {
        res,
        app
      }

      if (!accessToken) {
        await dispatch('refreshToken', payload);
        if (isLoginPath) return app.router.push('/admin');
        return;
      }

      const decoded = await jwt_decode(accessToken);
      const exp = decoded.exp - 30;
      let expDate = Date.now() / 1000;

      if (expDate > exp) {
        console.log(payload);
        await dispatch('refreshToken', payload);
        if (isLoginPath) return app.router.push('/admin');
        return;
      }

      if (res) {
        const authMePayload = {
          accessToken,
          app
        }

        await dispatch('authMe', authMePayload)
      }

    } catch (error) {
      app.router.push('/admin/login');
    }
  },

  async refreshToken ({ commit, dispatch }, { res, app }) {

    const data = await this.$axios.$post('/api/auth/refreshToken');

    const payload = {
      data: data,
      app,
      res
    }

    await dispatch('setCookies', payload);
  },

  async setCookies ({ commit, dispatch }, { data, app, res }) {
    app.$cookiz.removeAll();

    console.log(data);
    console.log(app);

    app.$cookiz.set('access_token', data.access_token, {
      expires: new Date(Date.now() + 300000),
      path: '/'
    });

    app.$cookiz.set('refresh_token', data.refresh_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 604800000),
      path: '/'
    });

    if (res) {
      const authMePayload = {
        accessToken: data.access_token,
        app
      }
      await dispatch('authMe', authMePayload)
    }
  },



  async logout ({ commit }) {
    Cookie.remove('access_token');
    Cookie.remove('refresh_token');
    await this.$axios.$get('/api/users/logout', { progress: false });
    commit('SET_USER', null);
  },

  async createModerator ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    await this.$axios.$post('/api/users/register', payload, { headers: { Authorization: `Bearer ${accessToken}` }, progress: false });
  },

  async deleteModerator ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    await this.$axios.$delete(`/api/users/${payload}`, { headers: { Authorization: `Bearer ${accessToken}` }, progress: false });
  },

  async getModerators ({ commit }, payload) {
    const res = await this.$axios.$get('/api/users', { progress: false });
    commit('SET_MODERATORS', res.moderators);
  },

  async changeFullName ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    await this.$axios.$put(`/api/users/${payload.id}/fullname`, payload, { headers: { Authorization: `Bearer ${accessToken}` }, progress: false });
  },

  async changeEmail ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    await this.$axios.$put(`/api/users/${payload.id}/email`, payload, { headers: { Authorization: `Bearer ${accessToken}` }, progress: false });
  },

  async changePassword ({ commit }, payload) {
    const accessToken = Cookie.get('access_token');
    await this.$axios.$put(`/api/users/${payload.id}/password`, payload, { headers: { Authorization: `Bearer ${accessToken}` }, progress: false });
  }
}
