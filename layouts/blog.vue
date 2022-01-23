<template>
  <div class="Blog_layout">
    <Nav />
    <Input class="layout_search" type="text" placeholder="Wyszukaj" name="search" label="Wyszukaj post" is-search />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

export default {
  name: 'BlogLayout'
};

</script>

<style lang="scss" scoped>
  @import '../assets/scss/layouts/Blog.scss';
</style>
