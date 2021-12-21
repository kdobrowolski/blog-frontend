<template>
  <div class="Admin_moderators_add_page">
    <h1 class="page_header">
      Panel administratora
    </h1>
    <ModeratorForm />
    <Button value="Wróć" href="/admin/moderators" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import ModeratorForm from '~/components/ModeratorForm.vue';
import '~/assets/scss/pages/admin/moderators/add.scss';

@Component({
  components: {
    Button,
    ModeratorForm
  }
})
export default class AdminModeratorAdd extends Vue {

}
</script>
