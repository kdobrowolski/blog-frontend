<template>
  <form class="Moderator_form">
    <Input type="text" placeholder="Imię i nazwisko" label="Imię i nazwisko" name="fullname" />
    <Input type="email" placeholder="Adres e-mail" label="Adres e-mail" name="email" />
    <Input type="text" placeholder="Nazwa użytkownika" label="Nazwa użytkownika" name="username" />
    <Input type="password" placeholder="Hasło" label="Hasło" name="password" />
    <Input type="password" placeholder="Powtórz hasło" label="Powtórz hasło" name="repeat_password" />
    <Button v-if="!ModeratorExist" value="Utwórz" />
    <Button v-else value="Zaaktualizuj" />
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import Input from '~/components/Input.vue';
import '~/assets/scss/components/ModeratorForm.scss';

@Component({
  components: {
    Button,
    Input
  }
})
export default class ModeratorForm extends Vue {
  @Prop(Boolean) readonly ModeratorExist: boolean | undefined;
}
</script>
