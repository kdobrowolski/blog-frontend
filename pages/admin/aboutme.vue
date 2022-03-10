<template>
  <section class="Admin_about">
    <form class="about_form" @submit.prevent="submit($event)">
        <Editor :images="images" @content="updateContent" :value-input="aboutMe ? aboutMe : false"/>
        <p v-if="success" class="form_success">Zaaktualizowano pomyślnie!</p>
        <p v-if="error" class="form_error">Wystąpił błąd!</p>
        <Button element="submit" value="Zaaktualizuj" />
    </form>
    <Button element="nuxt-link" class="page_btn--margin page_btn--width" value="Wróć" href="/admin" />
  </section>
</template>

<script>

export default {
  name: 'AdminHomePage',
  layout: 'admin',
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
    resetStatus() {
      this.success = false;
      this.error = false;
    },
    async submit() {
        this.resetStatus();
        try {
            await this.$store.dispatch('editAboutMe', this.content);
            this.success = true;
        } catch (err) {
            this.error = true;
            console.log(err);
        }
    }
  },
  async asyncData({ store }) {
    await store.dispatch('getAboutMe');
    await store.dispatch('gallery/getImages');
    const images = await store.getters['gallery/getImages'];

    const aboutMe = store.getters['getAboutMeContent'];

    return { aboutMe, images };
  }
};

</script>