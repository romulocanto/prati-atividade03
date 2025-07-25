const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav').querySelector('ul');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});