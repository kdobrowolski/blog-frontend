<template>
  <div class="Admin_about">
    <form class="about_form" @submit.prevent="submit($event)">
        <Editor @content="updateContent" :value-input="aboutMe ? aboutMe : false"/>
        <p v-if="success" class="form_success">Zaaktualizowano pomyślnie!</p>
        <p v-if="error" class="form_error">Wystąpił błąd!</p>
        <Button value="Zaaktualizuj" is-submit />
    </form>
    <Button class="page_btn--width" value="Wróć" href="/admin" />
  </div>
</template>

<script>
import Button from '../../components/Button';
import Editor from '../../components/Editor.vue';

export default {
  name: 'AdminHomePage',
  layout: 'admin',
  components: {
    Button,
    Editor
  },
  middleware: ['logged-in'],
  data: () => ({
      content: null,
      success: false,
      error: null
  }),
  methods: {
    updateContent(val) {
      this.content = val;
    },
    async submit() {
        this.success = false;
        this.error = false;
        try {
            const payload = {
                content: this.content
            }
            await this.$store.dispatch('editAboutMe', payload);
            this.success = true;
        } catch (err) {
            this.error = true;
            console.log(err);
        }
    }
  },
  async asyncData({ store }) {
    await store.dispatch('getAboutMe');

    const aboutMe = store.getters['getAboutMeContent'];

    return { aboutMe };
  }
};

</script>

<style lang="scss" scoped>
</style>