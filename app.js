//Responsive navbar
const navBtn = document.querySelector(".burger");
const nav = document.querySelector(".navbar__nav");
const navItems = document.querySelectorAll(".navbar__item");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  //Burger animation
  navBtn.classList.toggle("triggerAnim");
  //Nav item animation
  navItems.forEach((el, i) => {
    if (el.style.animation) {
      el.style.animation = "";
    } else {
      el.style.animation = `animateNavItem .9s ease ${i / 5 + 0.2}s`;
    }
  });
});

////ABOUT PAGE
//MEET SECTION
const btnBox = document.querySelectorAll(".plus-icon");
const plusBtn = document.querySelectorAll(".fa-plus");
const cardFront = document.querySelectorAll(".meet__card-visible");
const cardBack = document.querySelectorAll(".meet__card-hidden");

const triggerCard = function () {
  plusBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
      cardFront[index].classList.toggle("hideCard");
      cardBack[index].classList.toggle("showCard");
      btnBox[index].classList.toggle("rotateIcon");
    });
  });
};

triggerCard();
