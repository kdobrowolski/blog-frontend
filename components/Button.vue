<template>
  <div class="button_container">
    <template v-if="!isSearch && !isSubmit">
      <NuxtLink :to="{ path: this.href }">
        <button class="btn" :value="value">
          {{ value }}
        </button>
      </NuxtLink>
    </template>
    <template v-else-if="isSubmit">
      <button type="submit" class="btn" :value="value">
        {{ value }}
      </button>
    </template>
    <template v-else>
      <NuxtLink :to="{ path: '/search/' + this.input }">
        <button class="btn" :value="value">
          {{ value }}
        </button>
      </NuxtLink>
    </template>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      required: true
    },
    input: {
      type: String,
      default: ''
    },
    isSearch: {
      type: Boolean
    },
    href: {
      type: String
    },
    isSubmit: {
      type: Boolean
    }
  },

  methods: {
    search () {
      this.$router.push({ path: '/search/' + this.input });
    },
    routeTo () {
      this.$router.push({ path: this.href });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/Button.scss';
</style>
