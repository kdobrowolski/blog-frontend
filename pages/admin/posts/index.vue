<template>
  <div class="Admin_posts_page">
    <Button element="nuxt-link" value="Dodaj post" href="/admin/posts/add" />
    <Button element="nuxt-link" value="Wróć" href="/admin" />
    <p class="page_posts_header">
      Lista postów
    </p>
    <div class="page_posts">
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
          is-admin
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
import PostCard from '../../../components/PostCard';
import Button from '../../../components/Button';

export default {
  name: 'AdminPostsPage',
  layout: 'admin',
  components: {
    PostCard,
    Button,
  },
  middleware: ['logged-in'],
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
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/posts/index.scss';
</style>
