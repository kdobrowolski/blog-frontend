<template>
  <section class="Editor">
    <client-only>
      <Button value="Dodaj z galerii" @click.native="addImage"/>
      <quill-editor
        class="editor_container"
        ref="editor"
        v-model="content"
        :options="editorOption"
      />
    </client-only>
    <GalleryContainer v-if="showGallery" is-form="true" id="editor_gallery" :images="images" @hide="showGallery = false" @add="pushImageToEditor"/>
  </section>
</template>

<script>

  export default {
    name: 'quill-example-nuxt',
    props: ['valueInput', 'images'],
    data () {
      return {
        content: '',
        imagesArr: [],
        showGallery: false,
        editorOption: {
          theme: 'snow',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          }
        }
      }
    },
  mounted() {
    if (this.valueInput) {
      this.content = this.valueInput;
    }

    this.imagesArr = this.images;
  },
  watch: {
    content: function() {
      this.getContent(this.content);
    }
  },
  methods: {
    getContent(val) {
      this.$emit('content', val);
    },
    async addImage() {
      await this.$store.dispatch('gallery/getImages');
      const images = await this.$store.getters['gallery/getImages'];
      this.imagesArr = this.images;
      this.showGallery = true;
    },
    pushImageToEditor(e) {
      this.content = this.content + `<img class="image" src="/public/${e}" alt="gallery_image">`;
    }
  }
};

</script>