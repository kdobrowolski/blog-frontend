<template>
    <nav class="Nav">
        <div class="Nav_container">
            <h1 class="container_logo">BlogApp</h1>
            <div class="container_menu" :class="{ 'active': isActive }">
                <ul class="menu_list">
                    <li class="list_item">Strona główna</li>
                    <li class="list_item">O mnie</li>
                    <li class="list_item">Posty</li>
                    <li class="list_item">Kontakt</li>
                </ul>
                <font-awesome-icon class="menu_close_icon" icon="times" v-on:click="toggleNavMenu"/>
            </div>
            <font-awesome-icon class="container_open_icon" icon="bars" v-on:click="toggleNavMenu"/>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import '../assets/scss/components/Nav.scss';

@Component
export default class Nav extends Vue {
    isActive: boolean = false;
    
    toggleNavMenu() {
        this.isActive = !this.isActive;
    }
}
</script>