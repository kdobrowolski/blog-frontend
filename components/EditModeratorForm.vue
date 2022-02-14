<template>
  <form class="edit_form" @submit.prevent="submit(type)">
      <template v-if="newEmailForm">
          <Input v-model="email" type="email" placeholder="Nowy e-mail" label="Nowy e-mail" name="email" />
          <p v-if="errors.emailError" class="form_error">{{ errors.emailError }}</p>
          <Input v-model="repeatEmail" type="email" placeholder="Powtórz e-mail" label="Powtórz e-mail" name="repeat_email" />
          <p v-if="errors.repeatEmailError" class="form_error">{{ errors.repeatEmailError }}</p>
          <p v-if="successEmail" class="form_success">Pomyślnie zmieniono adres e-mail!</p>
          <Button element="submit" value="Zmień" />
      </template>
      <template v-else-if="newPasswordForm">
          <Input v-model="oldPassword" type="password" placeholder="Stare hasło" label="Stare hasło" name="old_password" />
          <p v-if="errors.oldPasswordError" class="form_error">{{ errors.oldPasswordError }}</p>
          <Input v-model="newPassword" type="password" placeholder="Nowe hasło" label="Nowe hasło" name="new_password" />
          <p v-if="errors.newPasswordError" class="form_error">{{ errors.newPasswordError }}</p>
          <Input v-model="repeatNewPassword" type="password" placeholder="Powtórz nowe hasło" label="Powtórz nowe hasło" name="repeat_new_password" />
          <p v-if="errors.repeatNewPasswordError" class="form_error">{{ errors.repeatNewPasswordError }}</p>
          <p v-if="errors.wrongOldPassword" class="form_error">Stare hasło jest niepoprawne!</p>
          <p v-if="successPassword" class="form_success">Pomyślnie zmieniono hasło!</p>
          <Button element="submit" value="Zmień" />
      </template>
      <template v-else-if="changeFullnameForm">
          <Input v-model="firstName" type="text" placeholder="Imię" label="Imię" name="firstName" />
          <p v-if="errors.firstNameError" class="form_error">{{ errors.firstNameError }}</p>
          <Input v-model="lastName" type="text" placeholder="Nazwisko" label="Nazwisko" name="lastName" />
          <p v-if="errors.lastNameError" class="form_error">{{ errors.lastNameError }}</p>
          <p v-if="successFullName" class="form_success">Pomyślnie zmieniono imie i nazwisko!</p>
          <Button element="submit" value="Zmień" />
      </template>
  </form>
</template>

<script>
import { newFullNameValidation, newEmailValidation, newPasswordValidation } from '../helpers/validationForms';
import Button from './Button';
import Input from './Input';

export default {
  name: 'EditModeratorForm',
  components: {
    Button,
    Input
  },
  data: () => ({
    email: '',
    repeatEmail: '',
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
    firstName: '',
    lastName: '',
    errors: {
      firstNameError: null,
      lastNameError: null,
      emailError: null,
      repeatEmailError: null,
      oldPasswordError: null,
      newPasswordError: null,
      repeatNewPasswordError: null,
      wrong_oldPassword: false
    },
    successEmail: false,
    successPassword: false,
    successFullName: false,
  }),
  props: {
      newEmailForm: false,
      newPasswordForm: false,
      changeFullnameForm: false,
      type: '',
  },
  methods: {
    async submit() {
      const { type } = this;

      this.errors = {
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        repeatEmailError: null,
        oldPasswordError: null,
        newPasswordError: null,
        repeatNewPasswordError: null,
        wrongOldPassword: null
      }

      this.successEmail = false;
      this.successPassword = false;
      this.successFullName = false;

      // FULLNAME UPDATE
      if (type === 'fullname') {
        const fullname = {
          firstName: this.firstName,
          lastName: this.lastName
        }

        const validation = newFullNameValidation(fullname);

        if (validation.errors) {
          const { errors } = validation;
          this.errors = {
            ...this.errors,
            firstNameError: errors.firstNameError,
            lastNameError: errors.lastNameError
          }
        } else {
          try {
            const id = this.$route.params.moderator;
            const payload = {
              ...fullname,
              id
            }

            await this.$store.dispatch('users/changeFullName', payload);
            this.successFullName = true;
          } catch (error) {
            console.log(error);
          }
        }
      }

      // EMAIL UPDATE
      else if (type === 'email') {
        const email = {
          email: this.email,
          repeat_email: this.repeatEmail
        }
        console.log(email);
        const validation = newEmailValidation(email);

        if (validation.errors) {
          const { errors } = validation;
          this.errors = {
            ...this.errors,
            emailError: errors.emailError,
            repeatEmailError: errors.repeatEmailError
          }
        } else {
          try {
            const id = this.$route.params.moderator;
            const payload = {
              ...email,
              id
            }

            await this.$store.dispatch('users/changeEmail', payload);
            this.successEmail = true;
          } catch (error) {
            console.log(error);
          }
        }
      }
      // PASSWORD UPDATE
      else if (type === 'password') {
        const password = {
          old_password: this.oldPassword,
          new_password: this.newPassword,
          repeat_new_password: this.repeatNewPassword
        }

        const validation = newPasswordValidation(password);

        if (validation.errors) {
          const { errors } = validation;
          this.errors = {
            ...this.errors,
            oldPasswordError: errors.oldPasswordError,
            newPasswordError: errors.newPasswordError,
            repeatNewPasswordError: errors.repeatNewPasswordError
          }
        } else {
          try {
            const id = this.$route.params.moderator;
            const payload = {
              ...password,
              id
            }

            await this.$store.dispatch('users/changePassword', payload);
            this.successPassword = true;
          } catch (error) {
            this.errors.wrongOldPassword = true;
            console.log(error);
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/components/EditModeratorForm.scss';
</style>