<template>
  <div class="Admin_post_page">
    <h1 class="page_header">
      Panel administratora
    </h1>
    <Button value="Usuń post" />
    <Button value="Wróć" href="/admin/posts" />
    <PostForm post-exist />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import PostForm from '~/components/PostForm.vue';
import '~/assets/scss/pages/admin/posts/_post.scss';

@Component({
  components: {
    Button,
    PostForm
  }
})
export default class AdminPostPage extends Vue {

}
</script>
