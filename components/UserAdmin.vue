<template>
  <section class="Admin_user">
    <UserCard :firstName="firstName" :lastName="lastName" :email="email"/>
    <Button v-if="userIsAdmin ? true : false" element="nuxt-link" value="Zarządzaj" :href="`/admin/users/${id}`" />
  </section>
</template>

<script>

export default {
  name: 'ModeratorAdmin',
  props: ['firstName', 'lastName', 'email', 'id', 'userIsAdmin']
};
</script>
