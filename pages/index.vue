<template>
  <div class="Main">
    <LatestPosts/>
    <div class="Main_posts">
      <h1 class="posts_header">Artykuły</h1>
      <PostCard v-for="post in posts" v-bind:key="post.id" :title="post.title" :description="post.description" :tags="post.tags" :date="post.date" :image="post.mainImage"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import LatestPosts from '../components/LatestPostsBoard.vue';
import PostCard from '../components/PostCard.vue';
import PostsJSON from '../assets/data.json';

@Component({
  layout: 'blog',
  components: {
    LatestPosts,
    PostCard
  },
})

export default class HomePage extends Vue {
  posts: Object = PostsJSON.posts

}
</script>

<style lang="scss">
  .Main {
    margin-top: 125px;

    & > .Main_posts {
      & > .posts_header {
        display: block;
        width: 100%;
        padding-bottom: 40px;
        text-align: center;
        font-size: 3rem;
      }
      @include md {
        display: flex;
        width: 90%;
        margin: 0 auto;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      @include lg {
        width: 80%;
      }
    }
  }
</style>