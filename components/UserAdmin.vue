<template>
  <section class="Admin_user">
    <div class="user_page">
      <UserCard :firstName="firstName" :lastName="lastName" :email="email"/>
      <Button v-if="userIsAdmin ? true : false" class="page_btn--margin" element="nuxt-link" value="Zarządzaj" :href="`/admin/users/${id}`" />
    </div>
  </section>
</template>

<script>

export default {
  name: 'UserAdmin',
  props: ['firstName', 'lastName', 'email', 'id', 'userIsAdmin']
};
</script>
