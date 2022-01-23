<template>
  <div class="Admin_post_page">
    <Button value="Usuń post" @click.native="deletePost" />
    <Button value="Zarządzaj komentarzami" :href="`/admin/posts/${post.id}/comments`" />
    <Button value="Wróć" href="/admin/posts" />
    <PostForm post-exist :formValue="post" form-type="edit" />
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
      const res = await store.dispatch('posts/getOnePost', id);

      const post = res.post;

      return { post }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/posts/_post.scss';
</style>