<template>
  <section class="Main_about">
    <AboutContainer :content="aboutMe"/>
    <h1 class="about_header">
      Moderatorzy
    </h1>
    <UserAdmin 
      v-for="user in users" 
      :key="user.id" 
      :firstName="user.firstName" 
      :lastName="user.lastName"
      :email="user.email"
      :id="user.id"
    />
  </section>
</template>

<script>

export default {
  name: 'AboutPage',
  async asyncData({ store }) {
    await store.dispatch('getAboutMe');
    await store.dispatch('users/getUsers');


    const users = store.getters['users/getUsers'];
    const aboutMe = store.getters['getAboutMeContent'];

    return { users, aboutMe };
  }
};
</script>