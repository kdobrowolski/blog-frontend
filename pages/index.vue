<template>
  <div class="main">
    <LatestPosts />
  </div>
</template>

<script lang="ts">
import LatestPosts from '../components/LatestPostsBoard.vue';
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: 'blog',
  components: {
    LatestPosts
  }
})

export default class extends Vue {
  
}
</script>

<style lang="scss">
  .main {
    margin-top: 125px;
  }
</style>