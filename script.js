
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
