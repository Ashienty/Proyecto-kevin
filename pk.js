/*Animacion del cambio de imagen*/
var slides = document.querySelectorAll("#slider div");
var index = 0;
var interval;

function showSlide(i) {
  slides.forEach(function (slide, j) {
    slide.classList.toggle("active", j === i);
  });
}
function next() {
  index = (index + 1) % slides.length;
  showSlide(index);
}
showSlide(index);
interval = setInterval(next, 5000);
var slider = document.getElementById("slider");
slider.onpointerdown = function () {
  clearInterval(interval);
};
slider.onpointerup = function () {
  interval = setInterval(next, 5000);
};
