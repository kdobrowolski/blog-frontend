<template>
  <section class="Admin_moderator">
    <ModeratorCard :firstName="firstName" :lastName="lastName" :email="email"/>
    <Button v-if="userIsAdmin ? true : false" element="nuxt-link" value="Zarządzaj" :href="`/admin/moderators/${id}`" />
  </section>
</template>

<script>

export default {
  name: 'ModeratorAdmin',
  props: ['firstName', 'lastName', 'email', 'id', 'userIsAdmin']
};
</script>
