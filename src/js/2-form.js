import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: '',
  message: '',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDataInput, 500));

populateFormData();

function onFormSubmit(e) {
  if (formData.email && formData.message) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    formData = {
      email: '',
      message: '',
    };
  } else {
    alert('Fill please all fields');
  }
}

function onFormDataInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormData() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    refs.email.value = data.email || '';
    refs.message.value = data.message || '';
  }
}
