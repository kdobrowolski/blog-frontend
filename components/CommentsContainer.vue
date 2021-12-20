<template>
  <div class="Comments_container">
    <h2 class="container_header">
      Komentarze
    </h2>
    <form class="container_form">
      <Input class="form_input" type="text" placeholder="Imię i nazwisko" name="fullname" label="Imię i nazwisko" />
      <Input class="form_input" placeholder="Treść" name="content" label="Treść" is-textarea />
      <Button class="form_btn" value="Dodaj komentarz" />
    </form>
    <Comment />
    <Comment />
    <Comment />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Comment from '~/components/Comment.vue';
import Input from '~/components/Input.vue';
import Button from '~/components/Button.vue';
import '../assets/scss/components/CommentsContainer.scss';

@Component({
  components: {
    Comment,
    Input,
    Button
  }
})
export default class CommentsContainer extends Vue {

}
</script>
