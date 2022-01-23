export const postValidation = (postValues ,isEdit) => {
  const { title, description, tags, date, file, content } = postValues;
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

  // Date Input
  if (date === '' || undefined) {
    errors.dateError = "Data jest wymagana!";
  }

  // mainImage Input
  if(!isEdit) {
    if (file === null) {
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

export const moderatorValidation = (userValues, repeat_password) => {
  const { firstName, lastName, username, email, password } = userValues;
  let errors = {};

  if (firstName === '' || undefined) {
    errors.firstNameError = "Imię jest wymagane!";
  }

  if (lastName === '' || undefined) {
    errors.lastNameError = "Nazwisko jest wymagane!";
  }

  if (username === '' || undefined) {
    errors.usernameError = "Nazwa użytkownika jest wymagana!";
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

  if (repeat_password === '' || undefined) {
    errors.repeat_passwordError = "Powtórzenie hasła jest wymagane!";
  }

  if (password && repeat_password !== '') {
    if (password !== repeat_password) {
      errors.repeat_passwordError = "Hasła się nie zgadzają!"
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

export const newFullNameValidation = (fullNameValues) => {
  const { firstName, lastName } = fullNameValues;
  let errors = {};

  if (firstName === '' || undefined) {
    errors.firstNameError = "Imię jest wymagane!";
  }

  if (lastName === '' || undefined) {
    errors.lastNameError = "Nazwisko jest wymagane!";
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

export const newEmailValidation = (emailValues) => {
  const { email, repeat_email } = emailValues;
  let errors = {};

  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email === '' || undefined) {
    errors.emailError = "E-mail jest wymagany!";
  } else if (!email.match(regexEmail)) {
    errors.emailError = "Nieprawidłowy e-mail!";
  }

  if (repeat_email === '' || undefined) {
    errors.repeat_emailError = "Powtórzenie hasła jest wymagane!";
  }

  if (email && repeat_email !== '') {
    if (email !== repeat_email) {
      errors.repeat_emailError = "E-mail się nie zgadza!"
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

export const newPasswordValidation = (passwordValues) => {
  const { old_password, new_password, repeat_new_password } = passwordValues;
  let errors = {};

  if (old_password === '' || undefined) {
    errors.old_passwordError = "Stare hasło jest wymagane!";
  }

  if (new_password === '' || undefined) {
    errors.new_passwordError = "Nowe hasło jest wymagane!";
  }

  if (repeat_new_password === '' || undefined) {
    errors.repeat_new_passwordError = "Powtórzenie nowego hasła jest wymagane!";
  }

  if (new_password && repeat_new_password !== '') {
    if (new_password !== repeat_new_password) {
      errors.repeat_new_passwordError = "Hasła się nie zgadzają!"
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
