<template>
  <section class="Post_page">
    <img class="page_main_image" :src="`/public/${post.mainImage}`" alt="post_image" />
    <div class="page_info">
      <span class="info_tags"> {{ post.tags }} </span>
      <span class="info_date"> - {{ post.created_at | formatDate }}</span>
    </div>
    <h2 class="page_header">{{ post.title }}</h2>
    <div class="page_content" v-html="post.content"></div>
    <Reactions :reactions="reactions" :reactionType="reactionType" />
    <CommentsContainer :comments="commentsData" />
  </section>
</template>

<script>

export default {
  name: 'PostPage',
  async asyncData({ store, route }) {
    try {
      const userIp = await store.getters['getIp'];

      const payload = {
        postId: route.params.post,
        userIp
      };

      const data = await store.dispatch('posts/getOnePost', payload.postId);
      const post = data.post;

      const comments = await store.dispatch('comments/getComments', payload.postId);
      const commentsData = await store.getters['comments/getComments'];

     const reactionType = await store.dispatch('posts/getUserReaction', payload);
    
      const reactions = post.reactions;

      return { post, commentsData, reactions, reactionType }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>