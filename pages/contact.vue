<template>
  <div class="Main_contact">
    <h2 class="contact_header">
      Skontaktuj się ze mną
    </h2>
    <form class="contact_form">
      <Input type="text" name="fullname" placeholder="Imię i nazwisko" label="Imię i nazwisko"/>
      <Input type="email" name="email" placeholder="Adres e-mail" label="Adres e-mail"/>
      <Input type="tel" name="tel" placeholder="Nr telefonu" label="Nr telefonu"/>
      <Input name="msg" placeholder="Wiadomość" label="Wiadomość" is-textarea />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Input from '../components/Input.vue';
import '../assets/scss/pages/Contact.scss';

@Component({
  layout: 'blog',
  components: {
    Input
  }
})
export default class Contact extends Vue {

}
</script>
