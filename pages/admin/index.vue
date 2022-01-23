<template>
  <div class="Admin_home_page">
    <p class="page_active_user">
      Jesteś zalogowany jako
      <span class="user--color">{{ getFullName }}</span>
    </p>
    <Button class="page_btn--width" value="O mnie" href="/admin/aboutme" />
    <Button class="page_btn--width" value="Posty" href="/admin/posts" />
    <Button class="page_btn--width" value="Moderatorzy" href="/admin/moderators" />
    <Button class="page_btn--width" value="Wyloguj się" @click.native="logout" />
  </div>
</template>

<script>
import Button from '../../components/Button';

export default {
  name: 'AdminHomePage',
  layout: 'admin',
  components: {
    Button
  },
  middleware: ['logged-in'],
  computed: {
    getFullName () {
      const user = this.$store.getters['users/getUser'];
      return user && `${user.firstName} ${user.lastName}` || null;
    }
  },
  methods: {
    async logout () {
      await this.$store.dispatch('users/logout');
      window.location = '/admin/login';
    }
  }
};

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/index.scss';
</style>
