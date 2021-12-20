<template>
  <div class="Blog_layout">
    <Nav />
    <Input class="layout_search" type="text" placeholder="Wyszukaj" name="search" label="Wyszukaj post"/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Input from '../components/Input.vue';
import '../assets/scss/layouts/blog.scss';

@Component({
  components: {
    Input
  }
})
export default class BlogLayout extends Vue {
}

</script>
