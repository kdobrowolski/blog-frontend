<template>
  <article class="Comment_container">
    <p class="container_username">{{ fullname }}</p>
    <p class="container_date">{{ date | formatDate }}</p>
    <p class="container_content">{{ content }}</p>
    <template v-if="isAdmin">
      <Button value="Usuń" @click.native="deleteComment"/>
    </template>
  </article>
</template>

<script>

export default {
  name: 'Comment',
  props: {
    fullname: {
      type: String
    },
    date: {
      type: String
    },
    content: {
      type: String
    },
    isAdmin: {
      type: Boolean
    },
    commentId: {
      type: Number | String
    }
  },
  methods: {
    async deleteComment() {
      try {
        const payload = this.commentId;
        await this.$store.dispatch('comments/deleteComment', payload);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
