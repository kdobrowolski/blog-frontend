<template>
  <div class="Admin_moderators_add_page">
    <ModeratorForm />
    <Button value="Wróć" :href="'/admin/moderators'" />
  </div>
</template>

<script>
import ModeratorForm from '../../../components/ModeratorForm';
import Button from '../../../components/Button';

export default {
  name: 'AdminModeratorAdd',
  layout: 'admin',
  middleware: ['is-moderator', 'logged-in'],
  components: {
    ModeratorForm,
    Button
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/moderators/add.scss';
</style>
