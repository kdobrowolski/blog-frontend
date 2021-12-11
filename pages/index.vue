<template>
  <div class="main">
    <LatestPosts />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LatestPosts from '../components/LatestPostsBoard.vue';

export default Vue.extend({
  layout: 'blog',
  components: {
    LatestPosts
  }
})
</script>

<style lang="scss">
  .main {
    margin-top: 125px;
  }
</style>
