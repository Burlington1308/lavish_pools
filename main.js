const mobileToggle = document.querySelector('.mobile');
const menuToggle = document.querySelector('.nav-items');

mobileToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});