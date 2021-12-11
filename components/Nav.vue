<template>
    <nav class="nav">
        <div class="nav-container">
            <h1 class="nav-logo">BlogApp</h1>
            <div class="nav-list" :class="{ 'openMenu': isActive }">
                <ul class="nav-elements">
                    <li>Strona główna</li>
                    <li>O mnie</li>
                    <li>Posty</li>
                    <li>Kontakt</li>
                </ul>
                <font-awesome-icon class="closeIcon" icon="times" v-on:click="handleNavList"/>
            </div>
            <font-awesome-icon class="menu-icon" icon="bars" v-on:click="handleNavList"/>
        </div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
    isActive: boolean = false;
    
    handleNavList() {
        this.isActive = !this.isActive;
    }
}
</script>