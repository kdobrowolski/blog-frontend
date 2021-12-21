<template>
  <div class="Admin_home_page">
    <h1 class="page_header">
      Panel administratora
    </h1>
    <p class="page_active_user">
      Jesteś zalogowany jako
      <span class="user--color">Kacper Dobrowolski</span>
    </p>
    <Button class="page_btn--width" value="Posty" href="/admin/posts" />
    <Button class="page_btn--width" value="Moderatorzy" href="/admin/moderators" />
    <Button class="page_btn--width" value="Wyloguj się" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import '~/assets/scss/pages/admin/index.scss';

@Component({
  components: {
    Button
  }
})
export default class AdminHomePage extends Vue {

}
</script>
