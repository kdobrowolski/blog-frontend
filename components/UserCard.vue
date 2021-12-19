<template>
  <div class="User_card">
    <div class="user_avatar" />
    <p class="user_username">
      Kacper Dobrowolski
    </p>
    <p class="user_description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra convallis elit, nec varius justo lacinia et. Suspendisse potenti. Aenean ut tincidunt justo. Aliquam mattis, lorem et vehicula pharetra, nisi turpis egestas lorem, non vehicula diam tellus sit amet nibh. Sed sem odio, ornare at pharetra vel, tempus ac augue. Aenean egestas posuere metus vel imperdiet. Donec at egestas nunc. Nunc at finibus magna. Mauris at metus volutpat tellus pulvinar venenatis.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import '../assets/scss/components/UserCard.scss';

@Component
export default class HomePage extends Vue {

}
</script>
