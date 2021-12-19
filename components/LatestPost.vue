<template>
  <div class="Latest_post">
    <img class="Post_image" src="~/assets/img/coffee.jpeg" alt="post_image">
    <div class="Post_box">
      <div class="box_content">
        <p class="content_info">
          <span class="info_tags">Praca, Przerwa</span>
          <span class="info_date"> - Czerwiec 27, 2022</span>
        </p>
        <h2 class="content_header">
          Czy palenie CBD podczas przerwy w pracy jest legalne?
        </h2>
        <p class="content_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ante turpis. Etiam interdum luctus leo, sed semper libero egestas vitae. In hac habitasse platea dictumst. Sed ac feugiat lorem. Cras purus lorem, lacinia sed tortor vulputate, ultricies porttitor nibh.
        </p>
        <Button class="content_btn--left" value="Czytaj dalej" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Button from '../components/Button.vue';
import '../assets/scss/components/LatestPost.scss';

@Component({
  components: {
    Button
  }
})
export default class PostCard extends Vue {
  // @Prop(String) readonly title!: string | undefined;
  // @Prop(String) readonly description!: string | undefined;
  // @Prop(String) readonly tags!: string | undefined;
  // @Prop(String) readonly date!: string | undefined;
  // @Prop(String) readonly image!: string | undefined;
}
</script>
