<template>
  <div class="Reactions_container">
    <h2 class="container_header">
      Reakcje
    </h2>
    <div class="container_icon">
      <font-awesome-icon class="icon_like" icon="thumbs-up" />
      <span class="icon_count_reactions">12</span>
    </div>
    <div class="container_icon container_icon--margin-left">
      <font-awesome-icon class="icon_heart" icon="heart" />
      <span class="icon_count_reactions">12</span>
    </div>
    <div class="container_icon container_icon--margin-left">
      <font-awesome-icon class="icon_star" icon="star" />
      <span class="icon_count_reactions">12</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import '../assets/scss/components/Reactions.scss';

@Component
export default class Reactions extends Vue {

}
</script>
