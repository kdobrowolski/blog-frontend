<template>
  <footer class="Footer">
    <div class="footer_menu">
      <ul class="menu_list">
        <li class="list_item">
          Strona główna
        </li>
        <li class="list_item">
          O mnie
        </li>
        <li class="list_item">
          Posty
        </li>
        <li class="list_item">
          Kontakt
        </li>
      </ul>
      <div class="menu_contact_info">
        <p class="menu_email">
          kdobrowolski12345@gmail.com
        </p>
        <p class="menu_phone">
          +48 506490865
        </p>
        <p class="menu_location">
          Starogard Gdański, Polska
        </p>
      </div>
      <p class="menu_copyright">
        Copyright &copy; Kacper Dobrowolski 2021
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import '../assets/scss/components/Footer.scss';

@Component
export default class PostCard extends Vue {

}
</script>
