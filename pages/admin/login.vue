<template>
  <div class="Admin_login_page">
    <h1 class="page_header">
      Zaloguj się do panelu administratora
    </h1>
    <form class="page_form">
      <Input type="text" placeholder="Nazwa użytkownika" name="username" label="Nazwa użytkownika" />
      <Input type="password" placeholder="Hasło" name="password" label="Hasło" />
      <Button value="Zaloguj się" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Input from '~/components/Input.vue';
import Button from '~/components/Button.vue';
import '~/assets/scss/pages/admin/Login.scss';

@Component({
  components: {
    Input,
    Button
  }
})
export default class AdminLogin extends Vue {

}
</script>
