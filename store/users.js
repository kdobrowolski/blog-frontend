import Cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';

export const state = () => ({
  user: null,
  updateUser: null,
  users: null,
  access_token: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user;
  },

  SET_USERS (state, users) {
    state.users = users;
  },

  SET_UPDATE_USER (state, user) {
    state.updateUser = user;
  }
}

export const getters = {
  isLoggedIn (state) {
    return !!state.user;
  },

  getUser (state) {
    return state.user;
  },

  getUpdateUser (state) {
    return state.updateUser
  },

  getUsers (state) {
    return state.users;
  },
}

export const actions = {
  async login ({ commit }, payload) {
    const { data } = await this.$axios.$post('/api/auth/login', payload, { progress: false });
  },

  async authMe ({ commit }, { app }) {
    try {
      const user = await this.$axios.$get('/api/auth/me', { progress: false });
      commit ('SET_USER', user);
    } catch (error) {
      app.router.push('/admin/login');
    }
  },

  async checkRefreshToken ({ commit, dispatch }, { app, res }) {
    const path = app.router.history.current.path;
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

    app.$cookiz.set('access_token', data.accessToken, {
      expires: new Date(Date.now() + 300000),
      path: '/'
    });

    app.$cookiz.set('refresh_token', data.refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 604800000),
      path: '/'
    });

    if (res) {
      const authMePayload = {
        accessToken: data.accessToken,
        app
      }
      await dispatch('authMe', authMePayload)
    }
  },

  async logout ({ commit }) {
    Cookie.remove('access_token');
    Cookie.remove('refresh_token');
    await this.$axios.$post('/api/auth/logout', { progress: false });
    commit('SET_USER', null);
  },

  async createUser ({ commit }, payload) {
    await this.$axios.$post('/api/user', payload, { progress: false });
  },

  async deleteUser ({ commit }, payload) {
    await this.$axios.$delete(`/api/user/${payload}`, { progress: false });
  },

  async getUsers ({ commit }, payload) {
    const res = await this.$axios.$get('/api/user', { progress: false });
    commit('SET_USERS', res.users);
  },

  async getUserById ({ commit }, payload) {
    const res = await this.$axios.$get(`/api/user/${payload.id}`, { progress: false });
    commit('SET_UPDATE_USER', res);
  },

  async updateUser ({ commit }, payload) {
    await this.$axios.$patch(`/api/user/${payload.id}`, payload, { progress: false });
  },

  async changeEmail ({ commit }, payload) {
    await this.$axios.$put(`/api/user/${payload.id}/email`, payload, { progress: false });
  },

  async changePassword ({ commit }, payload) {
    await this.$axios.$put(`/api/user/${payload.id}/password`, payload, { progress: false });
  }
}
