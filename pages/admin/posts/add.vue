<template>
  <div class="Admin_post_add_page">
    <Button value="Wróć" href="/admin/posts" />
    <PostForm form-type="create" />
  </div>
</template>

<script>
import PostForm from '../../../components/PostForm';
import Button from '../../../components/Button';

export default {
  name: 'AdminPostPage',
  layout: 'admin',
  components: {
    PostForm,
    Button,
  },
  middleware: ['logged-in'],
}

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/posts/add.scss';
</style>
