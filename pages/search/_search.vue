<template>
  <div class="Search_page">
    <h2 class="page_header">
      Wyszukane posty
    </h2>
    <PostCard
      v-for="post in searchedPosts"
      :key="post.id"
      :post-id="post.id"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"
      :date="post.date"
      :image="post.mainImage"
    />
  </div>
</template>

<script>
import PostCard from '../../components/PostCard';

export default {
  layout: 'blog',
  name: 'SearchPage',
  components: {
    PostCard
  },
  data: () => ({
    searchedPosts: []
  }),
  async asyncData ({ params, store }) {
    try {
      await store.dispatch('posts/getPosts');
      const res = await store.getters['posts/getPosts'];
      const posts = res.posts;

      const searchedPosts = [];
      posts.map((item) => {
        const word = params.search;
        const found = item.content.includes(word) || item.title.includes(word);
        if (found) {
          searchedPosts.push(item);
        }
      });

      return { searchedPosts };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/search/_search.scss';
</style>
