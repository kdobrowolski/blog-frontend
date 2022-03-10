<template>
  <main class="Blog_layout">
    <Nav />
    <Input class="layout_search" type="text" placeholder="Wyszukaj" name="search" label="Wyszukaj post" is-search />
    <Nuxt />
    <Footer />
  </main>
</template>

<script>

export default {
  name: 'BlogLayout'
};

</script>
