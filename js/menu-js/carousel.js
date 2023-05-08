const prev1 = document.querySelector(".left-arrow-1");
const next1 = document.querySelector(".right-arrow-1");
const prev2 = document.querySelector(".left-arrow-2");
const next2 = document.querySelector(".right-arrow-2");
const prev3 = document.querySelector(".left-arrow-3");
const next3 = document.querySelector(".right-arrow-3");
const prev4 = document.querySelector(".left-arrow-4");
const next4 = document.querySelector(".right-arrow-4");

const carousel = document.querySelector(".carousel");

const track1 = document.querySelector(".track-1");
const track2 = document.querySelector(".track-2");
const track3 = document.querySelector(".track-3");
const track4 = document.querySelector(".track-4");

let width = carousel.offsetWidth;
let index = 0;

window.addEventListener("resize", function () {
    width = carousel.offsetWidth;
});

next1.addEventListener("click", function (e) {
    e.preventDefault();
    index = index + 1;
    prev1.classList.add("show");
    track1.style.transform = "translateX(" + index * -width + "px)";
    if (track1.offsetWidth - index * width < index * width) {
        next1.classList.add("hide");
    }
});

prev1.addEventListener("click", function () {
    index = index - 1;
    next1.classList.remove("hide");
    if (index === 0) {
        prev1.classList.remove("show");
    }
    track1.style.transform = "translateX(" + index * -width + "px)";
});

next2.addEventListener("click", function (e) {
    e.preventDefault();
    index = index + 1;
    prev2.classList.add("show");
    track2.style.transform = "translateX(" + index * -width + "px)";
    if (track2.offsetWidth - index * width < index * width) {
        next2.classList.add("hide");
    }
});

prev2.addEventListener("click", function () {
    index = index - 1;
    next2.classList.remove("hide");
    if (index === 0) {
        prev2.classList.remove("show");
    }
    track2.style.transform = "translateX(" + index * -width + "px)";
});

next3.addEventListener("click", function (e) {
    e.preventDefault();
    index = index + 1;
    prev3.classList.add("show");
    track3.style.transform = "translateX(" + index * -width + "px)";
    if (track3.offsetWidth - index * width < index * width) {
        next3.classList.add("hide");
    }
});

prev3.addEventListener("click", function () {
    index = index - 1;
    next3.classList.remove("hide");
    if (index === 0) {
        prev3.classList.remove("show");
    }
    track3.style.transform = "translateX(" + index * -width + "px)";
});

next4.addEventListener("click", function (e) {
    e.preventDefault();
    index = index + 1;
    prev4.classList.add("show");
    track4.style.transform = "translateX(" + index * -width + "px)";
    if (track4.offsetWidth - index * width < index * width) {
        next4.classList.add("hide");
    }
});

prev4.addEventListener("click", function () {
    index = index - 1;
    next4.classList.remove("hide");
    if (index === 0) {
        prev4.classList.remove("show");
    }
    track4.style.transform = "translateX(" + index * -width + "px)";
});
