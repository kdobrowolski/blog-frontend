<template>
  <section class="Admin_gallery">
    <Button element="nuxt-link" class="page_btn--width" value="Wróć" href="/admin" />
    <GalleryContainer :images="images"/>
  </section>
</template>

<script>

export default {
  name: 'AdminGallery',
  layout: 'admin',
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

