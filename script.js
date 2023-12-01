const email = document.getElementById('email');
const psw1 = document.getElementById('psw1');
const psw2 = document.getElementById('psw2');

const eyeicon1 = document.getElementById('eyeicon1');
const eyeicon2 = document.getElementById('eyeicon2');

const btn = document.getElementById('login-btn');

const icon1 = '/images/eye-close.png';
const icon2 = '/images/eye-open.png';

eyeicon1.onclick = () => {
  const passwordHidden = psw1.type === 'password';
  psw1.type = passwordHidden ? 'text' : 'password';
  eyeicon1.setAttribute('src', passwordHidden ? icon2 : icon1);
};

eyeicon2.onclick = () => {
  const passwordHidden = psw2.type === 'password';
  psw2.type = passwordHidden ? 'text' : 'password';
  eyeicon2.setAttribute('src', passwordHidden ? icon2 : icon1);
};

btn.onclick = (e) => {
  e.preventDefault();
  const formIsValid = {
    psw: true,
    email: true
  };

  formIsValid.psw = psw1.value.length > 0 && psw1.value === psw2.value;
  formIsValid.email =
    email.value.includes('@') &&
    email.value.includes('.') &&
    email.value.length > 7;

  if (formIsValid.psw && formIsValid.email) {
    console.log(`Email: ${email.value} Password: ${psw1.value}`);
  } else if (formIsValid.psw && !formIsValid.email) {
    console.log('Email is invalid!');
  } else if (!formIsValid.psw && formIsValid.email) {
    console.log('Invalid Password!');
  } else console.log('Invalid Values!!!');
};
