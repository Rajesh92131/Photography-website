let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document
    .getElementsByClassName("slides")[0]
    .getElementsByTagName("img");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  var currslide = document.getElementById("slide-counter");
  var currval = slideIndex;
  currslide.innerHTML = ++currval + "/3";
}

document.querySelector(".prev").addEventListener("click", () => {
  plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  plusSlides(1);
});

//////////////////////////////////////////////////////////////////////////////////////////////

let slideIndex0 = 0;
showSlides0(slideIndex0);

function plusSlides0(n) {
  showSlides0((slideIndex0 += n));
}

function showSlides0(n) {
  let slides0 = document
    .getElementsByClassName("slides0")[0]
    .getElementsByTagName("img");
  if (n >= slides0.length) {
    slideIndex0 = 0;
  }
  if (n < 0) {
    slideIndex0 = slides0.length - 1;
  }
  for (let i = 0; i < slides0.length; i++) {
    slides0[i].style.display = "none";
  }
  slides0[slideIndex0].style.display = "block";
  var currslide0 = document.getElementById("slide-counter0");
  var currval0 = slideIndex0;
  currslide0.innerHTML = ++currval0 + " / 3";
}

document.querySelector(".prev0").addEventListener("click", () => {
  plusSlides0(-1);
});

document.querySelector(".next0").addEventListener("click", () => {
  plusSlides0(1);
});

///////////////////////////////////////////////////////////////////5555555555555//////////////////////////////////////

const slider5 = document.querySelector(".slider5");
const slides5 = document.querySelector(".slides5");
const slideWidth5 = slides5.firstElementChild.clientWidth;
let counter5 = 0;

function slideNext5() {
  if (counter5 > slides5.children.length - 1) {
    slides5.style.transition = "none";
    counter5 = 0;
    slides5.style.transform = `translateX(-${counter5 * slideWidth5}px)`;
    setTimeout(() => {
      slides5.style.transition = "transform 0.3s ease-in";
      counter5++;
      slides5.style.transform = `translateX(-${counter5 * slideWidth5}px)`;
    }, 50);
  } else {
    counter5++;
    slide5();
  }
}

function slidePrev5() {
  if (counter5 <= 0) {
    slides5.style.transition = "none";
    counter5 = slides5.children.length;
    slides5.style.transform = `translateX(-${counter5 * slideWidth5}px)`;
    setTimeout(() => {
      slides5.style.transition = "transform 0.3s ease-in-out";
      counter5--;
      slides5.style.transform = `translateX(-${counter5 * slideWidth5}px)`;
    }, 50);
  } else {
    counter5--;
    slide5();
  }
}

function slide5() {
  slides5.style.transition = "transform 0.3s ease-in-out";
  slides5.style.transform = `translateX(-${counter5 * slideWidth5}px)`;
}
