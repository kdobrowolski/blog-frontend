<template>
  <section class="Admin_login_page">
    <form class="page_form" @submit.prevent="login($event)">
      <Input v-model="user.name" type="text" placeholder="Nazwa użytkownika" name="username" label="Nazwa użytkownika" />
      <Input v-model="user.password" type="password" placeholder="Hasło" name="password" label="Hasło" />
      <p class="form_error">{{ this.$store.state.users.error }}</p>
      <p class="form_error">{{ this.error }}</p>
      <Button element="submit" value="Zaloguj się" />
    </form>
  </section>
</template>

<script>

export default {
  name: 'AdminLogin',
  layout: 'admin',
  middleware: ['logged-out'],
  data: () => ({
    user: {
      name: '',
      password: ''
    },
    error: ''
  }),
  methods: {
    async login (e) {
      try {
        await this.$store.dispatch('users/login', this.user);
        window.location = '/admin';
      } catch (error) {
        this.error = 'Zły login lub hasło!';
        console.error(error);
      }
    }
  }
};
</script>
