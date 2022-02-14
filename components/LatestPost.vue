<template>
  <div class="Latest_post">
    <img class="Post_image" :src="`/public/${image}`" alt="post_image">
    <div class="Post_box">
      <div class="box_content">
        <p class="content_info">
          <span class="info_tags">{{ tags }}</span>
          <span class="info_date"> - {{ date | formatDate }}</span>
        </p>
        <h2 class="content_header">
          {{ title }}
        </h2>
        <p class="content_description">
          {{ description }}
        </p>
        <Button element="nuxt-link" class="content_btn--left content_btn--bottom" value="Czytaj dalej" :href="`/posts/${postId}`" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LatestPost',
  props: [ 'postId', 'title', 'description', 'tags', 'date', 'image' ]
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/LatestPost.scss';
</style>
