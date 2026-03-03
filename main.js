const mobileToggle = document.getElementsByClassName('.mobile');
const menuToggle = document.getElementsByClassName('.nav-items');

mobileToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});