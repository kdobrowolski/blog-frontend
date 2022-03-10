<template>
  <section class="About_container">
    <h2 class="container_header">O mnie</h2>
    <p class="container_content" v-html="content"></p>
  </section>
</template>

<script>

export default {
  name: 'AboutContainer',
  props: ['content']
};

</script>