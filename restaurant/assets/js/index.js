const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const textField = document.querySelector(".txt-field");
burgerMenu.addEventListener("click",(e)=>{
    burgerMenu.classList.toggle("menu-active");
    menu.classList.toggle("menu-active");
    textField.classList.toggle("none");
});


let slideIndex = 1; 
showSlides();
function currentDiv(n) {
  showSlides(slideIndex = n);
}
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " dot-active";
  
  slideIndex++;
  timer = setTimeout(showSlides, 4000);
}
