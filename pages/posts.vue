<template>
    <div class="Main">
        <div class="Main_posts">
            <h1 class="posts_header">Artykuły</h1>
              <PostCard v-for="post in posts" v-bind:key="post.id" :title="post.title" :description="post.description" :tags="post.tags" :date="post.date" :image="post.mainImage"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import PostCard from '../components/PostCard.vue';
import PostsJSON from '../assets/data.json';
import '../assets/scss/pages/Posts.scss';

@Component({
  layout: 'blog',
  components: {
      PostCard
  }
})

export default class HomePage extends Vue {
  posts: Object = PostsJSON.posts
}
</script>