<template>
  <div class="Post_page">
    <img class="page_main_image" :src="`/public/${post.mainImage}`" alt="post_image" />
    <div class="page_info">
      <span class="info_tags"> {{ post.tags }} </span>
      <span class="info_date"> - {{ post.date | formatDate }}</span>
    </div>
    <h2 class="page_header">{{ post.title }}</h2>
    <div class="page_content" v-html="post.content"></div>
    <Reactions :reactions="post" :reactionType="reactionType" />
    <CommentsContainer :comments="commentsData" />
  </div>
</template>

<script>
import Reactions from '../../components/Reactions';
import CommentsContainer from '../../components/CommentsContainer';

export default {
  layout: 'blog',
  name: 'PostPage',
  components: {
    Reactions,
    CommentsContainer
  },
  async asyncData({ store, route }) {
    try {
      const payload = route.params.post;
      const reactionData = await store.dispatch('posts/getReaction', payload);
      const data = await store.dispatch('posts/getOnePost', payload);

      const comments = await store.dispatch('comments/getComments', payload);
      const post = data.post;
      const commentsData = await store.getters['comments/getComments'];

      const reactionType = reactionData.res.reaction_type;
      return { post, commentsData, reactionType }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss">
  @import '../../assets/scss/pages/posts/_post.scss';
</style>
