<template>
  <div class="Main_homepage">
    <LatestPostsBoard :posts="posts"/>
    <div class="homepage_posts">
      <h1 class="posts_header">
        Artykuły
      </h1>
        <PostCard 
          id="post"
          v-for="post in itemsForList"
          :key="post.id"
          :post-id="post.id"
          :title="post.title"
          :description="post.description"
          :tags="post.tags"
          :date="post.date"
          :image="post.mainImage"
        />
      <div class="pagination_container">
        <b-pagination
        v-if="Object.keys(itemsForList).length > perPage"
        v-model="currentPage"
        :total-rows="posts.length"
        :per-page="perPage"
        aria-controls="posts"
        align="center"
      ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '../components/PostCard';
import LatestPostsBoard from '../components/LatestPostsBoard';

export default {
  name: 'HomePage',
  layout: 'blog',
  components: {
    PostCard,
    LatestPostsBoard
  },
  data: () => ({
    perPage: 6,
    currentPage: 1
  }),
  computed: {
    itemsForList: {
      get: function () {
        return this.posts.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage,);
      }
    }
  },
  async asyncData({ store }) {
    try {
      await store.dispatch('posts/getPosts');
      const res = await store.getters['posts/getPosts'];
      const posts = res.posts;
      return { posts }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/pages/HomePage.scss';
</style>
