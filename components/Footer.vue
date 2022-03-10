<template>
  <footer class="Footer">
    <div class="footer_menu">
      <section class="menu_nav">
        <ul class="nav_list">
          <li class="list_item">
            <NuxtLink class="item_link" to="/">Strona główna</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink class="item_link" to="/about">O mnie</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink class="item_link" to="/posts">Posty</NuxtLink>
          </li>
          <li class="list_item">
            <NuxtLink class="item_link" to="/contact">Kontakt</NuxtLink>
          </li>
        </ul>
      </section>
      <section class="menu_contact_info">
        <p class="menu_email">
          kdobrowolski12345@gmail.com
        </p>
        <p class="menu_phone">
          +48 506490865
        </p>
        <p class="menu_location">
          Starogard Gdański, Polska
        </p>
      </section>
      <p class="menu_copyright">
        Copyright &copy; Kacper Dobrowolski 2021
      </p>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
