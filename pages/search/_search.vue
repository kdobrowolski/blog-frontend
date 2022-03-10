<template>
  <section class="Search_page">
    <h1 v-if="searchedPosts.length !== 0" class="page_header">
      Wyszukane posty
    </h1>
    <h1 v-else class="page_header">
      Brak wyszukanych postów
    </h1>
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
  </section>
</template>

<script>

export default {
  name: 'SearchPage',
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
