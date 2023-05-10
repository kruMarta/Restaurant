const navbarCollapse = document.querySelector('.navbar-collapse');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

navbarCollapse.addEventListener('shown.bs.collapse', function() {
  console.log("block");
  overlay.style.display = 'block';
  let translateButton = document.getElementById('ua-img');
  let currentSrc = translateButton.src;
  if (currentSrc.includes('/images/ua-button-green.svg')) {
    translateButton.src = '../images/ua button.svg';
  } else {
    translateButton.src = '../images/ua-button-green.svg';
  }
});


closeBtn.addEventListener('click', function() {
  navbarCollapse.classList.remove('show');
  overlay.style.display = 'none';
  let translateButton = document.getElementById('ua-img');
  let currentSrc = translateButton.src;
  if (currentSrc.includes('/images/ua-button-green.svg')) {
    translateButton.src = '../images/ua button.svg';
  } else {
    translateButton.src = '../images/ua-button-green.svg';
  }
});


const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');
  });
});