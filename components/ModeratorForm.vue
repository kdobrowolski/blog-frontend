<template>
  <form class="Moderator_form" @submit.prevent="submit">
    <Input v-model="firstName" type="text" placeholder="Imię" label="Imię" name="firstName" />
    <p v-if="errors.firstNameError" class="form_error">{{ errors.firstNameError }}</p>
    <Input v-model="lastName" type="text" placeholder="Nazwisko" label="Nazwisko" name="lastName" />
    <p v-if="errors.lastNameError" class="form_error">{{ errors.lastNameError }}</p>
    <Input v-model="email" type="email" placeholder="Adres e-mail" label="Adres e-mail" name="email" />
    <p v-if="errors.emailError" class="form_error">{{ errors.emailError }}</p>
    <Input v-model="username" type="text" placeholder="Nazwa użytkownika" label="Nazwa użytkownika" name="username" />
    <p v-if="errors.usernameError" class="form_error">{{ errors.usernameError }}</p>
    <Input v-model="password" type="password" placeholder="Hasło" label="Hasło" name="password" />
    <p v-if="errors.passwordError" class="form_error">{{ errors.passwordError }}</p>
    <Input v-model="repeat_password" type="password" placeholder="Powtórz hasło" label="Powtórz hasło" name="repeat_password" />
    <p v-if="errors.repeat_passwordError" class="form_error">{{ errors.repeat_passwordError }}</p>
    <p v-if="success" class="form_success">Dodano nowego moderatora pomyślnie!</p>
    <p v-if="errors.existUser" class="form_error">Istnieje juz taki uzytkownik!</p>
    <Button v-if="!moderatorExist" value="Utwórz" is-submit />
    <Button v-else value="Zaaktualizuj" />
  </form>
</template>

<script>
import { moderatorValidation } from '../helpers/validationForms';
import Button from './Button';
import Input from './Input';

export default {
  name: 'ModeratorForm',
  components: {
    Button,
    Input
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    repeat_password: '',
    errors: {
      firstNameError: null,
      lastNameError: null,
      emailError: null,
      usernameError: null,
      passwordError: null,
      repeat_passwordError: null,
      existUser: false
    },
    success: false
  }),
  props: {
    moderatorExist: {
      type: Boolean
    }
  },
  methods: {
    async submit(e) {
      this.errors = {
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        usernameError: null,
        passwordError: null,
        repeat_passwordError: null,
        existUser: false,
      }
      this.success = false;

      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password,
      }

      const validation = moderatorValidation(user, this.repeat_password);
      console.log(validation);

      if (validation.errors) {
        const { errors } = validation;
        this.errors = {
          ...this.errors,
          firstNameError: errors.firstNameError,
          lastNameError: errors.lastNameError,
          emailError: errors.emailError,
          usernameError: errors.usernameError,
          passwordError: errors.passwordError,
          repeat_passwordError: errors.repeat_passwordError,
        }
      } else {
        try {
          const payload = {
            ...user,
            isAdmin: 0
          }

          await this.$store.dispatch('users/createModerator', payload);
          this.success = true;
        } catch (error) {
          this.errors.existUser = true;
          console.log(console.log(error));
        }
      }
    }
  }
};

</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/ModeratorForm.scss';
</style>
