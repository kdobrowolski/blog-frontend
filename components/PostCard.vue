<template>
  <div class="Post_card">
    <img class="card_image" :src="`/public/${image}`" alt="card_image">
    <div class="card_content">
      <div class="content_info">
        <span class="info_tags">{{ tags }}</span>
        <span class="info_date"> - {{ date | formatDate }}</span>
      </div>
      <h2 class="content_header">
        {{ title }}
      </h2>
      <p class="content_description">
        {{ description }}
      </p>
    </div>
    <div class="card_btn">
      <Button element="nuxt-link" v-if="!isAdmin" class="btn--center" value="Czytaj dalej" :href="'/posts/' + postId" />
      <Button element="nuxt-link" v-else class="btn--center" value="Zarządzaj" :href="'/admin/posts/' + postId" />
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'PostCard',
  components: {
    Button
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    tags: {
      type: String
    },
    date: {
      type: String
    },
    image: {
      type: String
    },
    postId: {
      type: [ String, Number ]
    },
    isAdmin: {
      type: Boolean
    }
  }
};

</script>

<style lang="scss">
  @import '../assets/scss/components/PostCard.scss';
</style>
