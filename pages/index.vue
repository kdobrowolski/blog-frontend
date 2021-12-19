<template>
  <div class="Main_homepage">
    <LatestPosts />
    <div class="homepage_posts">
      <h1 class="posts_header">
        Artykuły
      </h1>
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :tags="post.tags"
        :date="post.date"
        :image="post.mainImage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import LatestPosts from '../components/LatestPostsBoard.vue';
import PostCard from '../components/PostCard.vue';
import PostsJSON from '../assets/data.json';
import '../assets/scss/pages/HomePage.scss';

@Component({
  layout: 'blog',
  components: {
    LatestPosts,
    PostCard
  }
})

export default class HomePage extends Vue {
  posts: Object = PostsJSON.posts
}
</script>
