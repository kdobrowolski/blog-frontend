<template>
  <div class="Post_page">
    <img class="page_main_image" src="~/assets/img/coffee.jpeg" alt="post_image" />
    <div class="page_info">
      <span class="info_tags">Praca, Przerwa</span>
      <span class="info_date"> - Czerwiec 27, 2022</span>
    </div>
    <h2 class="page_header">Czy palenie CBD podczas przerwy w pracy jest legalne?</h2>
    <div class="page_content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt faucibus cursus. Mauris porttitor pharetra faucibus. Aenean rutrum neque non sollicitudin faucibus. Aenean non semper dui. Vestibulum condimentum venenatis leo, id rutrum tortor varius vel. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc et elementum sapien, vel congue tortor. Integer porta elementum faucibus. Ut sit amet ex iaculis magna porta imperdiet at a sapien. Curabitur sed mi sit amet justo ultrices molestie in quis tellus.

      Maecenas dapibus nisl nisl, sit amet commodo leo auctor et. Suspendisse id elementum risus. Duis fermentum ligula id libero finibus, ut dictum urna luctus. Aliquam erat volutpat. Praesent ex nisi, fermentum in augue ac, semper blandit dolor. Aliquam auctor volutpat cursus. Proin ligula lacus, malesuada sit amet accumsan non, fringilla ut risus. Mauris condimentum dictum libero, sit amet hendrerit tortor pellentesque nec.

      Curabitur condimentum luctus augue, eget bibendum velit pulvinar quis. Aenean eget nulla bibendum, porttitor urna et, auctor velit. Suspendisse sed faucibus sapien, a tempor orci. Nullam vestibulum sit amet enim non sagittis. Nullam condimentum nec mauris sed vestibulum. Fusce sagittis consequat feugiat. Aenean finibus feugiat nunc vel sollicitudin. Integer scelerisque ligula eget est consectetur, in tristique libero facilisis. Cras mollis justo quis est sagittis laoreet. Maecenas mollis arcu consectetur hendrerit elementum. Quisque nec porttitor tellus.

      Quisque eros nibh, suscipit ac dui vel, lacinia ullamcorper purus. Duis vehicula orci risus, non feugiat purus faucibus eget. Maecenas at pretium ex. Nunc lacinia vehicula nunc, ullamcorper semper elit tristique at. Donec non pulvinar risus, in aliquet risus. Curabitur non metus viverra, fermentum tortor ac, sagittis risus. Maecenas vitae ante non orci congue posuere vel sit amet risus. Donec et mauris tristique, venenatis sem eget, blandit ligula. Nullam id erat mi. Donec auctor risus leo, ac convallis dui feugiat ut. Morbi scelerisque ex quis augue bibendum pharetra. Integer eu dictum tortor. Fusce vitae magna vel libero ultricies malesuada non nec erat. Donec ipsum est, aliquet at viverra vitae, iaculis ac risus. Sed auctor ullamcorper condimentum.
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import '../../assets/scss/pages/posts/_post.scss';

@Component({
  layout: 'blog'
})
export default class PostsPage extends Vue {
}
</script>
