<template>
  <form class="Moderator_form" @submit.prevent="submit">
    <Input v-model="firstName" type="text" placeholder="Imię" label="Imię" name="firstName" />
    <p v-if="errors.firstNameError" class="form_error">{{ errors.firstNameError }}</p>
    <Input v-model="lastName" type="text" placeholder="Nazwisko" label="Nazwisko" name="lastName" />
    <p v-if="errors.lastNameError" class="form_error">{{ errors.lastNameError }}</p>
    <Input v-model="email" type="email" placeholder="Adres e-mail" label="Adres e-mail" name="email" />
    <p v-if="errors.emailError" class="form_error">{{ errors.emailError }}</p>
    <Input v-model="name" type="text" placeholder="Nazwa użytkownika" label="Nazwa użytkownika" name="username" />
    <p v-if="errors.nameError" class="form_error">{{ errors.nameError }}</p>
    <Input v-model="password" type="password" placeholder="Hasło" label="Hasło" name="password" />
    <p v-if="errors.passwordError" class="form_error">{{ errors.passwordError }}</p>
    <Input v-model="repeatPassword" type="password" placeholder="Powtórz hasło" label="Powtórz hasło" name="repeat_password" />
    <p v-if="errors.repeatPasswordError" class="form_error">{{ errors.repeatPasswordError }}</p>
    <p v-if="success" class="form_success">Dodano nowego moderatora pomyślnie!</p>
    <p v-if="errors.existUser" class="form_error">Istnieje juz taki uzytkownik!</p>
    <Button element="submit" v-if="!moderatorExist" value="Utwórz" />
  </form>
</template>

<script>
import { moderatorValidation } from '../helpers/validationForms';

export default {
  name: 'ModeratorForm',
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
    name: '',
    password: '',
    repeatPassword: '',
    errors: {
      firstNameError: null,
      lastNameError: null,
      emailError: null,
      nameError: null,
      passwordError: null,
      repeatPasswordError: null,
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
    resetStatus() {
      this.errors = {
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        nameError: null,
        passwordError: null,
        repeatPasswordError: null,
        existUser: false,
      }
      this.success = false;
    },
    async submit(e) {
      this.resetStatus();

      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        name: this.name,
        password: this.password,
        roles: ['Moderator']
      }

      const validation = moderatorValidation(user, this.repeatPassword);

      if (validation.errors) {
        const { errors } = validation;
        this.errors = {
          ...this.errors,
          firstNameError: errors.firstNameError,
          lastNameError: errors.lastNameError,
          emailError: errors.emailError,
          nameError: errors.nameError,
          passwordError: errors.passwordError,
          repeatPasswordError: errors.repeatPasswordError,
        }
      } else {
        try {
          await this.$store.dispatch('users/createModerator', user);
          this.success = true;
        } catch (error) {
          this.errors.existUser = true;
        }
      }
    }
  }
};

</script>
