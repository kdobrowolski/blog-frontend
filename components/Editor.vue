<template>
  <section class="Editor">
    <client-only>
      <quill-editor
        ref="editor"
        v-model="content"
        :options="editorOption"
      />
    </client-only>
  </section>
</template>

<script>
  export default {
    name: 'quill-example-nuxt',
    props: ['valueInput'],
    data () {
      return {
        content: '',
        editorOption: {
          theme: 'snow',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block', 'image']
            ]
          }
        }
      }
    },
    mounted() {
      console.log('App inited, the Quill instance object is:', this.$refs.editor.quill)
      setTimeout(() => {
        this.content = 'I was changed!'
      }, 3000)
    },
  mounted() {
    if (this.valueInput) {
      this.content = this.valueInput;
    }
  },
  watch: {
    content: function() {
      this.getContent(this.content);
    }
  },
  methods: {
    getContent(val) {
      this.$emit('content', val);
    }
  }
};

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/Editor.scss';
</style>