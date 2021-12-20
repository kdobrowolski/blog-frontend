<template>
  <div class="Admin_posts_page">
    <h1 class="page_header">
      Panel administatora
    </h1>
    <Button value="Dodaj post" />
    <Button value="Wróć" href="/admin" />
    <p class="page_posts_header">
      Lista postów
    </p>
    <div class="page_posts">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post-id="post.id"
        :title="post.title"
        :description="post.description"
        :tags="post.tags"
        :date="post.date"
        :image="post.mainImage"
        is-admin
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import PostCard from '~/components/PostCard.vue';
import '~/assets/scss/pages/admin/posts/index.scss';
import PostsJSON from '~/assets/data.json';

@Component({
  components: {
    Button,
    PostCard
  }
})
export default class AdminPostsPage extends Vue {
  posts: Object = PostsJSON.posts;
}
</script>
