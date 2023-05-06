var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

function scrollToAnchor() {
    console.log("scroll");
    const element = document.getElementById("reserv");
    element.scrollIntoView({ behavior: "smooth" });
}


const navbarCollapse = document.querySelector('.navbar-collapse');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

navbarCollapse.addEventListener('shown.bs.collapse', function() {
  overlay.style.display = 'block';
});


closeBtn.addEventListener('click', function() {
  navbarCollapse.classList.remove('show');
  overlay.style.display = 'none';
});


const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');
  });
});
