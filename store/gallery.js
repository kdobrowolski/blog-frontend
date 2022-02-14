export const state = () => ({
    images: []
  })
  
  export const mutations = {
    SET_IMAGES (state, images) {
      state.images = images;
    }
  }
  
  export const getters = {
    getImages (state) {
      return state.images;
    }
  }

export const actions = {
    async getImages ({ commit }) {
        const images = await this.$axios.$get('/api/gallery');

        commit ('SET_IMAGES', images.files);
    },

    async addImage ({ commit }, payload) {
      await this.$axios.$post('api/gallery', payload);
    },

    async deleteImage ({ commit }, payload) {
      await this.$axios.$delete('api/gallery', { data: payload });
    }
}
