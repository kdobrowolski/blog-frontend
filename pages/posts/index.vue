<template>
  <div class="Main_posts_page">
    <div class="page_posts">
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
          :date="post.created_at"
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
import PostCard from '../../components/PostCard';

export default {
  layout: 'blog',
  name: 'PostsPage',
  components: {
    PostCard
  },
  data: () => ({
    perPage: 12,
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
  @import '../../assets/scss/pages/posts/index.scss';
</style>
