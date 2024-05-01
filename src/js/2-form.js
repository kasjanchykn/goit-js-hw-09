const formData = {
  email: '',
  message: '',
};
const formDataKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const textareaMessag = document.querySelector('textarea[name="message"]');

form.addEventListener('input', event => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  localStorage.setItem(formDataKey, JSON.stringify(formData));
});

const savedLocalFormData = JSON.parse(localStorage.getItem(formDataKey));
if (savedLocalFormData) {
  form.elements.email.value = savedLocalFormData.email;
  form.elements.message.value = savedLocalFormData.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = formData;
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  localStorage.removeItem(formDataKey);
  form.elements.email.value = '';
  form.elements.message.value = '';

  form.reset();
});
