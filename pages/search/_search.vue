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

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PostsJSON from '~/assets/data.json';
import PostCard from '~/components/PostCard.vue';
import '~/assets/scss/pages/search/_search.scss';

@Component({
  layout: 'blog',
  components: {
    PostCard
  }
})
export default class SearchPage extends Vue {
  searchedPosts: any[] = [];

  // eslint-disable-next-line require-await
  async asyncData ({ params }: any) {
    const posts = PostsJSON.posts;
    const searchedPosts: any[] = [];
    // eslint-disable-next-line array-callback-return
    posts.map((item: any) => {
      const word = params.search;
      const found = item.content.includes(word);
      if (found) {
        searchedPosts.push(item);
      }
    });
    return { searchedPosts };
  }
}

</script>
