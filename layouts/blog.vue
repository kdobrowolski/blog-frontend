<template>
  <div class="Blog_layout">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import '../assets/scss/layouts/blog.scss';

@Component
export default class BlogLayout extends Vue {
}

</script>
