<template>
  <div class="Main_contact">
    <h2 class="contact_header">
      Skontaktuj się ze mną
    </h2>
    <form class="contact_form" @submit.prevent="submit">
      <Input v-model="fullname" type="text" name="fullname" placeholder="Imię i nazwisko" label="Imię i nazwisko" />
      <p v-if="errors.fullnameError" class="form_error">{{ errors.fullnameError }}</p>
      <Input v-model="email" type="email" name="email" placeholder="Adres e-mail" label="Adres e-mail" />
      <p v-if="errors.emailError" class="form_error">{{ errors.emailError }}</p>
      <Input v-model="phone" type="tel" name="tel" placeholder="Nr telefonu" label="Nr telefonu" />
      <p v-if="errors.phoneError" class="form_error">{{ errors.phoneError }}</p>
      <Input v-model="message" name="msg" placeholder="Wiadomość" label="Wiadomość" is-textarea />
      <p v-if="errors.messageError" class="form_error">{{ errors.messageError }}</p>
      <p v-if="errors.failed" class="form_error">Wystąpił błąd!</p>
      <p v-if="success" class="form_success">Wiadomość została wysłana!</p>
      <Button value="Wyślij" is-submit />
    </form>
  </div>
</template>

<script>
import Input from '../components/Input';
import Button from '../components/Button';
import { sendEmailValidation } from '../helpers/validationForms';

export default {
  layout: 'blog',
  name: 'ContactPage',
  components: {
    Input,
    Button
  },
  data: () => ({
    fullname: '',
    email: '',
    phone: '',
    message: '',
    errors: {
      fullnameError: null,
      emailError: null,
      phoneError: null,
      messageError: null,
      failed: false,
    },
    success: false
  }),
  methods: {
    async submit() {
      this.errors = {
        fullnameError: null,
        emailError: null,
        phoneError: null,
        messageError: null,
        failed: false,
      }

      this.success = false;

      const emailContent = {
        fullname: this.fullname,
        email: this.email,
        phone: this.phone,
        message: this.message
      }

      const validation = sendEmailValidation(emailContent);

      if (validation.errors) { 
        const { errors } = validation;
        this.errors = {
          fullnameError: errors.fullnameError,
          emailError: errors.emailError,
          phoneError: errors.phoneError,
          messageError: errors.messageError
        }
      } else {
        try {
          const payload = {
            ...emailContent
          }
          await this.$store.dispatch('sendEmail', payload)
          this.success = true;
        } catch (error) {
          this.errors.failed = true;
          console.log(error);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../assets/scss/pages/Contact.scss';
</style>
