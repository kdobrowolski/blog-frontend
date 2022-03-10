<template>
  <div class="button_container">
    <template v-if="element === 'nuxt-link'">
      <NuxtLink class="container_content" :to="{ path: this.href }">
        {{ value }}
      </NuxtLink>
    </template>

    <template v-else-if="element === 'button'">
      <button type="button" class="btn container_content" :value="value">
        {{ value }}
      </button>
    </template>

    <template v-else-if="element === 'submit'">
      <button type="submit" class="btn container_content" :value="value">
        {{ value }}
      </button>
    </template>

    <template v-else-if="element === 'search'">
      <NuxtLink class="container_content" :to="{ path: '/search/' + this.input }">
        {{ value }}
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
    },
    element: {
      type: String,
      default: 'button'
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
