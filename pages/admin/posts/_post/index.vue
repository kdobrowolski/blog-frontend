<template>
  <div class="Admin_post_page">
    <Button value="Usuń post" @click.native="deletePost" />
    <Button element="nuxt-link" value="Zarządzaj komentarzami" :href="`/admin/posts/${post.id}/comments`" />
    <Button element="nuxt-link" value="Wróć" href="/admin/posts" />
    <PostForm post-exist :formValue="post" form-type="edit" :images="images"/>
    <Alert v-if="alertIsActive" type="deletePost" @hide="alertIsActive = false" />
  </div>
</template>

<script>
import PostForm from '../../../../components/PostForm';
import Button from '../../../../components/Button';
import Alert from '../../../../components/Alert';

export default {
  name: 'AdminPostPage',
  layout: 'admin',
  components: {
    PostForm,
    Button,
    Alert
  },
  data: () => ({
    alertIsActive: false
  }),
  middleware: ['logged-in'],
  methods: {
    async deletePost() {
      this.alertIsActive = true;
    }
  },
  async asyncData({ route, store }) {
    if (route.params.post) {
      const id = route.params.post;
      await store.dispatch('gallery/getImages');
      const images = await store.getters['gallery/getImages'];
      const res = await store.dispatch('posts/getOnePost', id);

      let createdAt = new Date(res.post.created_at);

      const post = {
        ...res.post,
        createdAt
      };

      return { post, images }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/posts/_post.scss';
</style>