const menuButton = document.querySelector('.mob-burger');
const menuOverlay = document.querySelector('.overlay');

menuButton.addEventListener('click', function() {
    menuOverlay.style.display = 'block';
});

const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function() {
    menuOverlay.style.display = 'none';
});