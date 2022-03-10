<template>
  <section class="Admin_post_page">
    <Button element="nuxt-link" value="Wróć" :href="`/admin/posts/${id}`" />
    <section class="page_comments_container">
      <CommentsContainer :comments="commentsData" is-admin />
    </section>
  </section>
</template>

<script>

export default {
  name: 'AdminPostPage',
  layout: 'admin',
  middleware: ['logged-in'],
  methods: {
    async deleteComment() {
      try {
        const id = this.$route.params.post;

        await this.$store.dispatch('posts/deletePosts', id);
      } catch (error) {
        console.log(error);
      }
    }
  },
  async asyncData({ route, store }) {
    try {
      const id = route.params.post;
      const comments = await store.dispatch('comments/getComments', id);
      const commentsData = await store.getters['comments/getComments'];

      return { commentsData, id }
    } catch (error) {
      console.log(error);
    }
  },
}
</script>