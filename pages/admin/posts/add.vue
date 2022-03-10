<template>
  <section class="Admin_post_add_page">
    <Button element="nuxt-link" value="Wróć" href="/admin/posts" />
    <PostForm form-type="create" :images="images"/>
  </section>
</template>

<script>

export default {
  name: 'AdminPostPage',
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
}

</script>