<template>
  <div class="Main_about">
    <UserCard />
    <h2 class="about_header">
      Moderatorzy
    </h2>
    <ModeratorCard />
    <ModeratorCard />
    <ModeratorCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import UserCard from '../components/UserCard.vue';
import ModeratorCard from '../components/ModeratorCard.vue';
import '../assets/scss/pages/About.scss';

@Component({
  layout: 'blog',
  components: {
    UserCard,
    ModeratorCard
  }
})

export default class HomePage extends Vue {

}
</script>
