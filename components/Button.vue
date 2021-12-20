<template>
  <button v-if="!isSearch" class="btn" @click="routeTo">
    {{ value }}
  </button>
  <button v-else class="btn" @click="search">
    {{ value }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import '../assets/scss/components/Button.scss';

@Component
export default class Button extends Vue {
  @Prop(String) readonly value!: string
  @Prop(String) readonly input!: string
  @Prop(Boolean) readonly isSearch!: boolean
  @Prop(String) readonly href!: string

  search () {
    this.$router.push({ path: '/search/' + this.input })
  }

  routeTo () {
    this.$router.push({ path: this.href });
  }
}
</script>
