<template>
  <nav class="Nav">
    <div class="Nav_container">
      <h1 class="container_logo">
        BlogApp
      </h1>
      <div class="container_menu" :class="{ 'active': isActive }">
        <ul class="menu_list">
          <li class="list_item">
            <NuxtLink to="/" class="item_link">Strona główna</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink to="/about" class="item_link">O mnie</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink to="/posts" class="item_link">Posty</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink to="/contact" class="item_link">Kontakt</NuxtLink>
          </li>
        </ul>
        <font-awesome-icon class="menu_close_icon" icon="times" @click="toggleNavMenu" />
      </div>
      <font-awesome-icon class="container_open_icon" icon="bars" @click="toggleNavMenu" />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import '../assets/scss/components/Nav.scss';

@Component
export default class Nav extends Vue {
    isActive: boolean = false;

    toggleNavMenu () {
      this.isActive = !this.isActive
    }
}
</script>
