<template>
  <div class="Admin_moderators_page">
    <Button element="nuxt-link" v-if="user.isAdmin ? true : false" value="Dodaj moderatora" href="/admin/moderators/add" />
    <Button element="nuxt-link" value="Wróć" href="/admin" />
    <h2 class="page_header_moderators">Lista moderatorów</h2>
    <ModeratorAdmin 
      v-for="moderator in moderators" 
      :key="moderator.id" 
      :firstName="moderator.firstName" 
      :lastName="moderator.lastName"
      :email="moderator.email"
      :id="moderator.id"
      :userIsAdmin="user.isAdmin"
    />
  </div>
</template>

<script>
import ModeratorAdmin from '../../../components/ModeratorAdmin';
import Button from '../../../components/Button';

export default {
  name: 'AdminModeratorsPage',
  layout: 'admin',
  components: {
    ModeratorAdmin,
    Button
  },
  middleware: ['logged-in'],
  async asyncData({ store }) {
    await store.dispatch('users/getModerators');

    const moderators = store.getters['users/getModerators'];
    const user = store.getters['users/getUser'];

    return { moderators, user };
  }
};

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/moderators/index.scss';
</style>
