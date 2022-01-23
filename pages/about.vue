<template>
  <div class="Main_about">
    <UserCard :content="aboutMe"/>
    <h2 class="about_header">
      Moderatorzy
    </h2>
    <ModeratorAdmin 
      v-for="moderator in moderators" 
      :key="moderator.id" 
      :firstName="moderator.firstName" 
      :lastName="moderator.lastName"
      :email="moderator.email"
      :id="moderator.id"
    />
  </div>
</template>

<script>
import ModeratorCard from '../components/ModeratorCard';
import UserCard from '../components/UserCard';

export default {
  layout: 'blog',
  name: 'AboutPage',
  components: {
    ModeratorCard,
    UserCard
  },
  async asyncData({ store }) {
    await store.dispatch('getAboutMe');
    await store.dispatch('users/getModerators');


    const moderators = store.getters['users/getModerators'];
    const aboutMe = store.getters['getAboutMeContent'];

    return { moderators, aboutMe };
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/pages/About.scss';
</style>
