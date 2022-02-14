<template>
  <div class="Admin_moderator">
    <ModeratorCard :firstName="firstName" :lastName="lastName" :email="email"/>
    <Button v-if="userIsAdmin ? true : false" element="nuxt-link" value="Zarządzaj" :href="`/admin/moderators/${id}`" />
  </div>
</template>

<script>
import ModeratorCard from './ModeratorCard';

export default {
  name: 'ModeratorAdmin',
  components: {
    ModeratorCard
  },
  props: ['firstName', 'lastName', 'email', 'id', 'userIsAdmin']
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/ModeratorAdmin.scss';
</style>
