<template>
  <div class="Admin_moderators_page">
    <h1 class="page_header">
      Panel administratora
    </h1>
    <Button value="Dodaj moderatora" href="/admin/moderators/add" />
    <Button value="Wróć" href="/admin" />
    <ModeratorAdmin />
    <ModeratorAdmin />
    <ModeratorAdmin />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import ModeratorAdmin from '~/components/ModeratorAdmin.vue';
import '~/assets/scss/pages/admin/moderators/index.scss';

@Component({
  components: {
    Button,
    ModeratorAdmin
  }
})
export default class AdminModeratorsPage extends Vue {

}
</script>
