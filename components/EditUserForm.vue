<template>
  <form class="edit_form" @submit.prevent="submit(type)">
      <template v-if="updateUserForm">
          <Input v-model="firstName" type="text" placeholder="Imię" :value-input="formValue ? formValue.firstName : false" label="Imię" name="firstName" />
          <p v-if="errors.firstNameError" class="form_error">{{ errors.firstNameError }}</p>
          <Input v-model="lastName" type="text" placeholder="Nazwisko" :value-input="formValue ? formValue.lastName : false" label="Nazwisko" name="lastName" />
          <p v-if="errors.lastNameError" class="form_error">{{ errors.lastNameError }}</p>
          <Input v-model="email" type="email" placeholder="E-mail" :value-input="formValue ? formValue.email : false" label="E-mail" name="email" />
          <p v-if="errors.emailError" class="form_error">{{ errors.emailError }}</p>
          <multiselect class="form_multiselect" v-model="roles" :options="options" placeholder="Uprawnienia" :close-on-select="false" :multiple="true" :select-label="selectLabel" :deselect-label="deselectLabel" :selected-label="selectedLabel"/>
          <p v-if="successUpdate" class="form_success">Pomyślnie zapisano zmiany!</p>
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
  </form>
</template>

<script>
import { updateUserValidation, newPasswordValidation } from '../helpers/validationForms';
import Multiselect from 'vue-multiselect';

export default {
  name: 'EditModeratorForm',
  components: {
    Multiselect
  },
  data: () => ({
    email: '',
    repeatEmail: '',
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
    firstName: '',
    lastName: '',
    roles: null,
    options: ['Admin', 'Moderator'],
    selectLabel: "Kliknij, aby wybrać",
    deselectLabel: "Kliknij, aby usunąć",
    selectedLabel: "Wybrano",
    errors: {
      firstNameError: null,
      lastNameError: null,
      emailError: null,
      oldPasswordError: null,
      newPasswordError: null,
      repeatNewPasswordError: null,
      wrongOldPassword: false
    },
    successUpdate: false,
    successPassword: false,
  }),
  props: {
      updateUserForm: false,
      newPasswordForm: false,
      type: '',
      formValue: null
  },
  mounted() {
    if (this.formValue) {
      this.email = this.formValue.email;
      this.firstName = this.formValue.firstName;
      this.lastName = this.formValue.lastName;
      this.roles = this.formValue.roles;
    }
    
  },
  methods: {
    resetStatus() {
      this.errors = {
        oldPasswordError: null,
        newPasswordError: null,
        repeatNewPasswordError: null,
        wrongOldPassword: null
      }

      this.successUpdate = false;
      this.successPassword = false;
    },
    async submit() {
      const { type } = this;

      if (type === 'user') {
        this.userUpdate();
      } else if (type === 'password') {
        this.passwordUpdate();
      }
    },
    async userUpdate() {
      const { firstName, lastName, email, roles } = this;
      const user = {
        firstName,
        lastName,
        email,
        roles
      }

      const validation = updateUserValidation(user);

      if (validation.errors) {
        const { errors } = validation;
          this.errors = {
          ...this.errors,
          firstNameError: errors.firstNameError,
          lastNameError: errors.lastNameError,
          emailError: errors.emailError
        }
      } else {
        try {
          const id = this.$route.params.user;
          const payload = {
            ...user,
            id
          }

          await this.$store.dispatch('users/updateUser', payload);
          this.successUpdate = true;
        } catch (error) {
          console.log(error);
        }
      }
    },
    async passwordUpdate() {
      const password = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        repeatNewPassword: this.repeatNewPassword
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
          const id = this.$route.params.user;
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
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>