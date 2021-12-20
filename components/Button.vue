<template>
  <button v-if="!isSearch" class="btn">
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

  search () {
    this.$router.push({ path: '/search/' + this.input })
  }
}
</script>
