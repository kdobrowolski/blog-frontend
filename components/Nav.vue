<template>
  <nav class="Nav">
    <div class="Nav_container">
      <span class="container_logo">
        BlogApp
      </span>
      <section class="container_menu" :class="{ 'active': isActive }">
        <ul class="menu_list">
          <li class="list_item">
            <NuxtLink to="/" class="item_link" @click.native="closeNavMenu" >Strona główna</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink to="/about" class="item_link" @click.native="closeNavMenu" >O mnie</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink to="/posts" class="item_link" @click.native="closeNavMenu" >Posty</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink to="/contact" class="item_link" @click.native="closeNavMenu" >Kontakt</NuxtLink>
          </li>
        </ul>
        <font-awesome-icon class="menu_close_icon" icon="times" @click="toggleNavMenu" />
      </section>
      <font-awesome-icon class="container_open_icon" icon="bars" @click="toggleNavMenu" />
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Nav',
  data: () => ({
    isActive: false
  }),
  methods: {
    toggleNavMenu () {
      this.isActive = !this.isActive
    },
    closeNavMenu () {
      if (this.isActive) {
        this.isActive = !this.isActive
      }
    }
  }
};

</script>