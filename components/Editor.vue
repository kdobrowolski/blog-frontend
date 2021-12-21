<template>
  <div class="Editor">
    <ClientOnly>
      <tiptap-vuetify v-model="content" :extensions="extensions" data-app />

      <template #placeholder>
        Loading...
      </template>
    </ClientOnly>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image
} from 'tiptap-vuetify';
import Button from '~/components/Button.vue';
import '~/assets/scss/components/Editor.scss';

@Component({
  components: {
    Button,
    TiptapVuetify
  }
})
export default class EditorComponent extends Vue {
  extensions: Object = [
    History,
    Blockquote,
    Link,
    Underline,
    Strike,
    Italic,
    ListItem,
    BulletList,
    OrderedList,
    Image,
    [
      Heading,
      {
        options: {
          levels: [1, 2, 3]
        }
      }
    ],
    Bold,
    Link,
    Code,
    HorizontalRule,
    Paragraph,
    HardBreak
  ]

  content: any = `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
}
</script>
