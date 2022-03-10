export const postValidation = (postValues ,isEdit) => {
  const { title, description, tags, date, mainImage, content } = postValues;
  let errors = {};

  // Title Input
  if (title === '' || undefined) {
    errors.titleError = "Tytuł jest wymagany!";
  } else if (title.length < 8 ) {
    errors.titleError = "Tytuł musi zawierać minimum 8 liter!";
  }

  // Description Input
  if (description === '' || undefined) {
    errors.descriptionError = "Opis jest wymagany!";
  } else if (description.length < 20) {
    errors.descriptionError = "Opis musi zawierać minimum 20 liter!";
  }

  // Tags Input
  if (tags === '' || undefined) {
    errors.tagsError = "Tagi są wymagane!";
  } else if (tags.length < 3) {
    errors.tagsError = "Pole tagi musi zawierać minimum 3 litery!";
  }

  // mainImage Input
  if(!isEdit) {
    if (mainImage === null) {
      errors.mainImageError = "Zdjęcie jest wymagane!";
    }
  }

  if (content === '' || undefined) {
    errors.contentError = "Treść jest wymagana!";
  } else if (content.length < 50) {
    errors.contentError = "Treść musi zawierać minimum 50 liter!";
  }

  if (Object.keys(errors).length === 0) {
    return {
      success: true
    }
  } else {
    return {
      errors
    }
  }
}

export const moderatorValidation = (userValues, repeatPassword) => {
  const { firstName, lastName, name, email, password } = userValues;
  let errors = {};

  if (firstName === '' || undefined) {
    errors.firstNameError = "Imię jest wymagane!";
  }

  if (lastName === '' || undefined) {
    errors.lastNameError = "Nazwisko jest wymagane!";
  }

  if (name === '' || undefined) {
    errors.nameError = "Nazwa użytkownika jest wymagana!";
  }

  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email === '' || undefined) {
    errors.emailError = "E-mail jest wymagany!";
  } else if (!email.match(regexEmail)) {
    errors.emailError = "Nieprawidłowy e-mail!";
  }

  if (password === '' || undefined) {
    errors.passwordError = "Hasło jest wymagane!";
  }

  if (repeatPassword === '' || undefined) {
    errors.repeatPasswordError = "Powtórzenie hasła jest wymagane!";
  }

  if (password && repeatPassword !== '') {
    if (password !== repeatPassword) {
      errors.repeatPasswordError = "Hasła się nie zgadzają!"
    }
  }

  if (Object.keys(errors).length === 0) {
    return {
      success: true
    }
  } else {
    return {
      errors
    }
  }

}

export const updateUserValidation = (userValues) => {
  const { firstName, lastName, email } = userValues;
  let errors = {};

  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (firstName === '' || undefined) {
    errors.firstNameError = "Imię jest wymagane!";
  }

  if (lastName === '' || undefined) {
    errors.lastNameError = "Nazwisko jest wymagane!";
  }

  if (email === '' || undefined) {
    errors.emailError = "E-mail jest wymagany!";
  } else if (!email.match(regexEmail)) {
    errors.emailError = "Nieprawidłowy e-mail!";
  }

  if (Object.keys(errors).length === 0) {
    return {
      success: true
    }
  } else {
    return {
      errors
    }
  }
}

export const newPasswordValidation = (passwordValues) => {
  const { oldPassword, newPassword, repeatNewPassword } = passwordValues;
  let errors = {};

  if (oldPassword === '' || undefined) {
    errors.oldPasswordError = "Stare hasło jest wymagane!";
  }

  if (newPassword === '' || undefined) {
    errors.newPasswordError = "Nowe hasło jest wymagane!";
  }

  if (repeatNewPassword === '' || undefined) {
    errors.repeatNewPasswordError = "Powtórzenie nowego hasła jest wymagane!";
  }

  if (newPassword && repeatNewPassword !== '') {
    if (newPassword !== repeatNewPassword) {
      errors.repeatNewPasswordError = "Hasła się nie zgadzają!"
    }
  }

  if (Object.keys(errors).length === 0) {
    return {
      success: true
    }
  } else {
    return {
      errors
    }
  }
}

export const sendEmailValidation = (emailContent) => {
  const { fullname, email, phone, message } = emailContent;
  let errors = {};

  if (fullname === '' || undefined) {
    errors.fullnameError = "Imię i nazwisko jest wymagane!";
  }

  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email === '' || undefined) {
    errors.emailError = "E-mail jest wymagany!";
  } else if (!email.match(regexEmail)) {
    errors.emailError = "Nieprawidłowy e-mail!";
  }

  const regexPhone = /^([0-9]{9})$/;

  if (phone === '' || undefined) {
    errors.phoneError = "Nr telefonu jest wymagany!";
  } else if (!phone.match(regexPhone)) {
    errors.phoneError = "Nieprawidłowy nr telefonu!";
  }

  if (message === '' || undefined) {
    errors.messageError = "Wiadomość jest wymagana!";
  }

  if (Object.keys(errors).length === 0) {
    return {
      success: true
    }
  } else {
    return {
      errors
    }
  }
}
