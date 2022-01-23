<template>
  <div class="User_card">
    <h1 class="user_header">O mnie</h1>
    <p class="user_content" v-html="content"></p>
  </div>
</template>

<script>

export default {
  name: 'UserCard',
  props: ['content']
};

</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/UserCard.scss';
</style>
