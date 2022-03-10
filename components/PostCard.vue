<template>
  <article class="Post_card">
    <img class="card_image" :src="`/public/${image}`" alt="card_image">
    <section class="card_content">
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
    </section>
    <section class="card_btn">
      <Button element="nuxt-link" v-if="!isAdmin" class="btn--center" value="Czytaj dalej" :href="'/posts/' + postId" />
      <Button element="nuxt-link" v-else class="btn--center" value="Zarządzaj" :href="'/admin/posts/' + postId" />
    </section>
  </article>
</template>

<script>

export default {
  name: 'PostCard',
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