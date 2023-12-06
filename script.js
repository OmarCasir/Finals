const loginBox = document.querySelector('.login-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

loginLink.addEventListener('click', () => {
    loginBox.classList.add('active');
});

registerLink.addEventListener('click', () => {
    loginBox.classList.remove('active');
});