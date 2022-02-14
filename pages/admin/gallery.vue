<template>
  <div class="Admin_gallery">
    <Button element="nuxt-link" class="page_btn--width" value="Wróć" href="/admin" />
    <GalleryContainer :images="images"/>
  </div>
</template>

<script>
import Button from '../../components/Button';
import GalleryContainer from '../../components/GalleryContainer';

export default {
  name: 'AdminGallery',
  layout: 'admin',
  components: {
    Button,
    GalleryContainer
  },
  middleware: ['logged-in'],
  async asyncData({ store }) {
    try {
      await store.dispatch('gallery/getImages');
      const images = await store.getters['gallery/getImages'];
      return { images }
    } catch (error) {
      console.log(error);
    }
  }
};

</script>

<style lang="scss" scoped>

</style>
