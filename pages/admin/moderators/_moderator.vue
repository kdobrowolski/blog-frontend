<template>
  <div class="Admin_moderators_add_page">
    <h2 class="page_header">Zmiana imienia i nazwiska</h2>
    <EditModeratorForm :changeFullnameForm="true" type="fullname" />
    <h2 class="page_header">Zmiana adresu e-mail</h2>
    <EditModeratorForm :newEmailForm="true" type="email" />
    <h2 class="page_header">Zmiana hasła</h2>
    <EditModeratorForm :newPasswordForm="true" type="password" />
    <Button value="Usuń moderatora" @click.native="deleteModerator" />
    <Button value="Wróć" href="/admin/moderators" />
    <Alert v-if="alertIsActive" type="deleteModerator" @hide="alertIsActive = false"/>
  </div>
</template>

<script>
import Button from '../../../components/Button';
import EditModeratorForm from '../../../components/EditModeratorForm.vue';
import Alert from '../../../components/Alert';

export default {
  name: 'AdminModeratorPage',
  layout: 'admin',
  components: {
    Button,
    EditModeratorForm,
    Alert
  },
  data: () => ({
    alertIsActive: false
  }),
  middleware: ['is-moderator', 'logged-in'],
  methods: {
    async deleteModerator() {
      this.alertIsActive = true;
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/pages/admin/moderators/add.scss';

  .page_header {
    margin-top: 30px;
    text-align: center;
    color: $primary-color;
  }
</style>
