<template>
  <div class="Admin_post_page">
    <h1 class="page_header">Panel administratora</h1>
    <Button value="Usuń post" />
    <Editor />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Editor from '~/components/Editor.vue';
import Button from '~/components/Button.vue';
import '~/assets/scss/pages/admin/posts/_post.scss';

@Component({
  components: {
    Button,
    Editor
  }
})
export default class AdminPostPage extends Vue {

}
</script>
