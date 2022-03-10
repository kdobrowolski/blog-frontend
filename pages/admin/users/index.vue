<template>
  <section class="Admin_users_page">
    <Button element="nuxt-link" v-if="user.roles.includes('Admin') ? true : false" value="Dodaj użytkownika" href="/admin/users/add" />
    <Button element="nuxt-link" value="Wróć" href="/admin" />
    <h2 class="page_header_users">Lista użytkowników</h2>
    <UserAdmin 
      v-for="userItem in usersList" 
      :key="userItem.id" 
      :firstName="userItem.firstName" 
      :lastName="userItem.lastName"
      :email="userItem.email"
      :id="userItem.id"
      :userIsAdmin="user.roles.includes('Admin')"
    />
  </section>
</template>

<script>

export default {
  name: 'AdminUsersPage',
  layout: 'admin',
  middleware: ['logged-in'],
  async asyncData({ store }) {
    await store.dispatch('users/getUsers');

    const usersList = store.getters['users/getUsers'];
    const user = store.getters['users/getUser'];
    console.log(user);

    return { usersList, user };
  }
};

</script>