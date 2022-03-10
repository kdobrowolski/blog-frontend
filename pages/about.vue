<template>
  <section class="Main_about">
    <AboutContainer :content="aboutMe"/>
    <h1 class="about_header">
      Moderatorzy
    </h1>
    <ModeratorAdmin 
      v-for="moderator in moderators" 
      :key="moderator.id" 
      :firstName="moderator.firstName" 
      :lastName="moderator.lastName"
      :email="moderator.email"
      :id="moderator.id"
    />
  </section>
</template>

<script>

export default {
  name: 'AboutPage',
  async asyncData({ store }) {
    await store.dispatch('getAboutMe');
    await store.dispatch('users/getModerators');


    const moderators = store.getters['users/getModerators'];
    const aboutMe = store.getters['getAboutMeContent'];

    return { moderators, aboutMe };
  }
};
</script>