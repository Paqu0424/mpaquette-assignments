let button = document.getElementById('submit-button');
let email = document.getElementById('email');
let fullName = document.getElementById('fname');
let message = document.getElementById('message');
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/iu;

function handleForm(e) {
  e.preventDefault();

  let data = {};
  let errors = [];

  if (fullName.value) {
    data.fullName = fullName.value;
  } else {
    errors.push('Full name is required.');
  }

  if (email.value) {
    if (email.value.match(emailRegex)) {
      data.email = email.value;
    } else {
      errors.push('Invalid email!');
    }
  } else {
    errors.push('Email is required.');
  }

  if (message.value) {
    data.message = message.value;
  } else {
    errors.push('Message is required.');
  }

  if (errors.length) {
    console.log(errors);
  } else {
    console.log(data);
  }
}

button.addEventListener('click', handleForm);
