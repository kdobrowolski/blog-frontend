<template>
  <div class="Moderator_card">
    <div class="card_info">
      <p class="card_username">
        {{ firstName + " " + lastName }}
      </p>
      <p class="card_email">
        {{ email }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ModeratorCard',
  props: ['firstName', 'lastName', 'email']
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/ModeratorCard.scss';
</style>