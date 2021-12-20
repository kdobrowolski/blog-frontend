<template>
  <div class="Comment_container">
    <p class="container_username">Alan Oleszek</p>
    <p class="container_date">10 lipiec, 2022</p>
    <p class="container_content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna ligula, pellentesque quis neque ut, iaculis gravida nisl. In nec purus nulla. Aenean mi nunc, gravida vitae orci eget, aliquam aliquet mi.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import '../assets/scss/components/Comment.scss';

@Component
export default class Comment extends Vue {

}
</script>
