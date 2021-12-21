<template>
  <div class="Admin_moderator">
    <ModeratorCard />
    <Button value="Zarządzaj" href="/admin/moderators/1" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import ModeratorCard from '~/components/ModeratorCard.vue';
import '~/assets/scss/components/ModeratorAdmin.scss';

@Component({
  components: {
    Button,
    ModeratorCard
  }
})
export default class ModeratorAdmin extends Vue {

}
</script>
