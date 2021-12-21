<template>
  <form class="Post_form">
    <Input type="text" placeholder="Tytuł" label="Tytuł" name="title" />
    <Input placeholder="Krótki opis" label="Krótki opis" name="short_desc" is-textarea />
    <Input type="text" placeholder="Tagi" label="Tagi" name="tags" />
    <Input type="date" placeholder="Data" label="Data" name="date" />
    <Input type="file" placeholder="Główne zdjęcie" label="Główne zdjęcie" name="main_image" />
    <Editor />
    <Button v-if="PostExist" value="Zaaktualizuj" />
    <Button v-else value="Dodaj post" />
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Editor from '~/components/Editor.vue';
import Button from '~/components/Button.vue';
import Input from '~/components/Input.vue';
import '~/assets/scss/components/PostForm.scss';

@Component({
  components: {
    Button,
    Editor,
    Input
  }
})
export default class PostForm extends Vue {
  @Prop(Boolean) readonly PostExist: boolean | undefined;
}
</script>
