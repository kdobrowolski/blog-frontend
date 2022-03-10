<template>
  <section class="Admin_users_add_page">
    <h2 class="page_header">Zmiana danych uzytkownika</h2>
    <EditUserForm :updateUserForm="true" :formValue="user" type="user" />
    <h2 class="page_header">Zmiana hasła</h2>
    <EditUserForm :newPasswordForm="true" type="password" />
    <Button value="Usuń użytkownika" @click.native="deleteUser" />
    <Button element="nuxt-link" value="Wróć" href="/admin/users" />
    <Alert v-if="alertIsActive" type="deleteUser" @hide="alertIsActive = false"/>
  </section>
</template>

<script>

export default {
  name: 'AdminUserPage',
  layout: 'admin',
  data: () => ({
    alertIsActive: false
  }),
  middleware: ['logged-in', 'is-moderator',],
  methods: {
    async deleteUser() {
      this.alertIsActive = true;
    }
  },
  async asyncData({ store, route, app }) {
    const id = route.params.user;
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
