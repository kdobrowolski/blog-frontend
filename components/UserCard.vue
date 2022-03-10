<template>
  <article class="User_card">
    <div class="card_info">
      <p class="card_username">
        {{ firstName + " " + lastName }}
      </p>
      <p class="card_email">
        {{ email }}
      </p>
    </div>
  </article>
</template>

<script>

export default {
  name: 'UserCard',
  props: ['firstName', 'lastName', 'email']
};
</script>