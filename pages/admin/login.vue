<template>
  <div class="Admin_login_page">
    <form class="page_form" @submit.prevent="login($event)">
      <Input v-model="user.username" type="text" placeholder="Nazwa użytkownika" name="username" label="Nazwa użytkownika" />
      <Input v-model="user.password" type="password" placeholder="Hasło" name="password" label="Hasło" />
      <p class="form_error">{{ this.$store.state.users.error }}</p>
      <p class="form_error">{{ this.error }}</p>
      <Button value="Zaloguj się" is-submit />
    </form>
  </div>
</template>

<script>
import Input from '../../components/Input';
import Button from '../../components/Button';

export default {
  name: 'AdminLogin',
  layout: 'admin',
  middleware: ['logged-out'],
  components: {
    Input,
    Button
  },
  data: () => ({
    user: {
      username: '',
      password: ''
    },
    error: ''
  }),
  methods: {
    async login (e) {
      try {
        const payload = {
          ...this.user,
        };
        await this.$store.dispatch('users/login', payload);
        window.location = '/admin';
      } catch (error) {
        this.error = 'Nie udalo sie zalogowac!';
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/Login.scss';
</style>
