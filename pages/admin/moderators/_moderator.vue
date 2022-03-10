<template>
  <section class="Admin_moderators_add_page">
    <h2 class="page_header">Zmiana danych uzytkownika</h2>
    <EditModeratorForm :updateUserForm="true" :formValue="user" type="user" />
    <h2 class="page_header">Zmiana hasła</h2>
    <EditModeratorForm :newPasswordForm="true" type="password" />
    <Button value="Usuń moderatora" @click.native="deleteModerator" />
    <Button element="nuxt-link" value="Wróć" href="/admin/moderators" />
    <Alert v-if="alertIsActive" type="deleteModerator" @hide="alertIsActive = false"/>
  </section>
</template>

<script>

export default {
  name: 'AdminModeratorPage',
  layout: 'admin',
  data: () => ({
    alertIsActive: false
  }),
  middleware: ['logged-in', 'is-moderator',],
  methods: {
    async deleteModerator() {
      this.alertIsActive = true;
    }
  },
  async asyncData({ store, route, app }) {
    const id = route.params.moderator;
    const accessToken = app.$cookiz.get('access_token');
    const payload = {
      accessToken,
      id
    }
    await store.dispatch('users/getUserById', payload);
    const user = await store.getters['users/getUpdateUser'];

    return { user };
  }
};
</script>
