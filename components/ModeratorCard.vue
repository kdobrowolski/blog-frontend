<template>
  <div class="Moderator_card">
    <div class="card_avatar" />
    <div class="card_info">
      <p class="card_username">
        Alan Oleszek
      </p>
      <p class="card_job">
        Full-Stack Developer in Kysune.me
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import '../assets/scss/components/ModeratorCard.scss';

@Component
export default class ModeratorCard extends Vue {

}
</script>
