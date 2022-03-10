<template>
  <div class="Admin_moderators_add_page">
    <ModeratorForm />
    <Button element="nuxt-link" value="Wróć" :href="'/admin/moderators'" />
  </div>
</template>

<script>

export default {
  name: 'AdminModeratorAdd',
  layout: 'admin',
  middleware: ['is-moderator', 'logged-in'],
}
</script>
