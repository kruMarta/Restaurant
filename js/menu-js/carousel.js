const prev1 = document.querySelector(".left-arrow-1");
const mob_prev1 = document.querySelector(".mob-left-arrow-1");
const next1 = document.querySelector(".right-arrow-1");
const mob_next1 = document.querySelector(".mob-right-arrow-1");
const prev2 = document.querySelector(".left-arrow-2");
const mob_prev2 = document.querySelector(".mob-left-arrow-2");
const next2 = document.querySelector(".right-arrow-2");
const mob_next2 = document.querySelector(".mob-right-arrow-2");
const prev3 = document.querySelector(".left-arrow-3");
const mob_prev3 = document.querySelector(".mob-left-arrow-3");
const next3 = document.querySelector(".right-arrow-3");
const mob_next3 = document.querySelector(".mob-right-arrow-3");
const prev4 = document.querySelector(".left-arrow-4");
const mob_prev4 = document.querySelector(".mob-left-arrow-4");
const next4 = document.querySelector(".right-arrow-4");
const mob_next4 = document.querySelector(".mob-right-arrow-4");

const carousel = document.querySelector(".carousel");
const mob_carousel = document.querySelector(".mob-carousel");

const track1 = document.querySelector(".track-1");
const mob_track1 = document.querySelector(".mob-track-1");
const track2 = document.querySelector(".track-2");
const mob_track2 = document.querySelector(".mob-track-2");
const track3 = document.querySelector(".track-3");
const mob_track3 = document.querySelector(".mob-track-3");
const track4 = document.querySelector(".track-4");
const mob_track4 = document.querySelector(".mob-track-4");

let width = carousel.offsetWidth;
let mob_width = mob_carousel.offsetWidth;
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

window.addEventListener("resize", function () {
    width = carousel.offsetWidth;
    mob_width = mob_carousel.offsetWidth - 20;
});

next1.addEventListener("click", function (e) {
    e.preventDefault();
    index1 = index1 + 1;
    prev1.classList.add("show");
    track1.style.transform = "translateX(" + index1 * -width + "px)";
    if (track1.offsetWidth - index1 * width < index1 * width) {
        next1.classList.add("hide");
    }
});


prev1.addEventListener("click", function () {
    index1 = index1 - 1;
    next1.classList.remove("hide");
    if (index1 === 0) {
        prev1.classList.remove("show");
    }
    track1.style.transform = "translateX(" + index1 * -width + "px)";
});

next2.addEventListener("click", function (e) {
    e.preventDefault();
    index2 = index2 + 1;
    prev2.classList.add("show");
    track2.style.transform = "translateX(" + index2 * -width + "px)";
    if (track2.offsetWidth - index2 * width < index2 * width) {
        next2.classList.add("hide");
    }
});

prev2.addEventListener("click", function () {
    index2 = index2 - 1;
    next2.classList.remove("hide");
    if (index2 === 0) {
        prev2.classList.remove("show");
    }
    track2.style.transform = "translateX(" + index2 * -width + "px)";
});

next3.addEventListener("click", function (e) {
    e.preventDefault();
    index3 = index3 + 1;
    prev3.classList.add("show");
    track3.style.transform = "translateX(" + index3 * -width + "px)";
    if (track3.offsetWidth - index3 * width < index3 * width) {
        next3.classList.add("hide");
    }
});

prev3.addEventListener("click", function () {
    index3 = index3 - 1;
    next3.classList.remove("hide");
    if (index3 === 0) {
        prev3.classList.remove("show");
    }
    track3.style.transform = "translateX(" + index3 * -width + "px)";
});

next4.addEventListener("click", function (e) {
    e.preventDefault();
    index4 = index4 + 1;
    prev4.classList.add("show");
    track4.style.transform = "translateX(" + index4 * -width + "px)";
    if (track4.offsetWidth - index4 * width < index4 * width) {
        next4.classList.add("hide");
    }
});

prev4.addEventListener("click", function () {
    index4 = index4 - 1;
    next4.classList.remove("hide");
    if (index4 === 0) {
        prev4.classList.remove("show");
    }
    track4.style.transform = "translateX(" + index4 * -width + "px)";
});


mob_next1.addEventListener("click", function (e) {
    e.preventDefault();
    index1 = index1 + 1;
    mob_prev1.classList.add("show");
    mob_track1.style.transform = "translateX(" + index1 * -mob_width + "px)";
    if (mob_track1.offsetWidth - index1 * mob_width - 20 < index1 * mob_width) {
        mob_next1.classList.add("hide");
    }
});


mob_prev1.addEventListener("click", function () {
    index1 = index1 - 1;
    mob_next1.classList.remove("hide");
    if (index1 === 0) {
        mob_prev1.classList.remove("show");
    }
    mob_track1.style.transform = "translateX(" + index1 * -mob_width + "px)";
});

mob_next2.addEventListener("click", function (e) {
    e.preventDefault();
    index2 = index2 + 1;
    mob_prev2.classList.add("show");
    mob_track2.style.transform = "translateX(" + index2 * -mob_width + "px)";
    if (mob_track2.offsetWidth - index2 * mob_width - 20 < index2 * mob_width) {
        mob_next2.classList.add("hide");
    }
});


mob_prev2.addEventListener("click", function () {
    index2 = index2 - 1;
    mob_next2.classList.remove("hide");
    if (index2 === 0) {
        mob_prev2.classList.remove("show");
    }
    mob_track2.style.transform = "translateX(" + index2 * -mob_width + "px)";
});

mob_next3.addEventListener("click", function (e) {
    e.preventDefault();
    index3 = index3 + 1;
    mob_prev3.classList.add("show");
    mob_track3.style.transform = "translateX(" + index3 * -mob_width + "px)";
    if (mob_track3.offsetWidth - index3 * mob_width - 20 < index3 * mob_width) {
        mob_next3.classList.add("hide");
    }
});


mob_prev3.addEventListener("click", function () {
    index3 = index3 - 1;
    mob_next3.classList.remove("hide");
    if (index3 === 0) {
        mob_prev3.classList.remove("show");
    }
    mob_track3.style.transform = "translateX(" + index3 * -mob_width + "px)";
});

mob_next4.addEventListener("click", function (e) {
    e.preventDefault();
    index4 = index4 + 1;
    mob_prev4.classList.add("show");
    mob_track4.style.transform = "translateX(" + index4 * -mob_width + "px)";
    if (mob_track4.offsetWidth - index4 * mob_width - 20 < index4 * mob_width) {
        mob_next4.classList.add("hide");
    }
});


mob_prev4.addEventListener("click", function () {
    index4 = index4 - 1;
    mob_next4.classList.remove("hide");
    if (index4 === 0) {
        mob_prev4.classList.remove("show");
    }
    mob_track4.style.transform = "translateX(" + index4 * -mob_width + "px)";
});
