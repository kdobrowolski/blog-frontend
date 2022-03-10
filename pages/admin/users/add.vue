<template>
  <section class="Admin_users_add_page">
    <UserForm />
    <Button element="nuxt-link" value="Wróć" :href="'/admin/users'" />
  </section>
</template>

<script>

export default {
  name: 'AdminUserAdd',
  layout: 'admin',
  middleware: ['is-moderator', 'logged-in'],
}
</script>
