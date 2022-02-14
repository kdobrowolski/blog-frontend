<template>
  <div class="Admin_post_page">
    <Button element="nuxt-link" value="Wróć" :href="`/admin/posts/${id}`" />
    <div class="page_comments_container">
      <CommentsContainer :comments="commentsData" is-admin />
    </div>
  </div>
</template>

<script>
import Button from '../../../../components/Button';
import CommentsContainer from '../../../../components/CommentsContainer';

export default {
  name: 'AdminPostPage',
  layout: 'admin',
  components: {
    Button,
    CommentsContainer
  },
  middleware: ['logged-in'],
  methods: {
    async deleteComment() {
      try {
        const id = this.$route.params.post;

        await this.$store.dispatch('posts/deletePosts', id);
        console.log('usunieto');
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

<style lang="scss" scoped>
  .page_comments_container {
    width: 70%;
    margin: 0 auto;
  }
</style>