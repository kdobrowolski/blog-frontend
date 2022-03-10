<template>
  <section class="Admin_home_page">
    <p class="page_active_user">
      Jesteś zalogowany jako
      <span class="user--color">{{ getFullName }}</span>
    </p>
    <section class="page_buttons">
      <Button element="nuxt-link" class="page_btn--width" value="O mnie" href="/admin/aboutme" />
      <Button element="nuxt-link" class="page_btn--width" value="Posty" href="/admin/posts" />
      <Button element="nuxt-link" class="page_btn--width" value="Galeria" href="/admin/gallery" />
      <Button element="nuxt-link" class="page_btn--width" value="Użytkownicy" href="/admin/users" />
      <Button class="page_btn--width" value="Wyloguj się" @click.native="logout" />
    </section>
  </section>
</template>

<script>

export default {
  name: 'AdminHomePage',
  layout: 'admin',
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
