function openmenu() {
  document.getElementById("myMenu").style.display = "block";
  document.getElementById("myOver").style.display = "block";
  document.getElementById("body-fixed").style.overflow = "hidden";
}

function closemenu() {
  document.getElementById("myMenu").style.display = "none";
  document.getElementById("myOver").style.display = "none";
  document.getElementById("body-fixed").style.overflow = "auto";
}

function down() {
  var x = document.querySelectorAll("ul");
  x[0].classList.toggle("hihi");
  x[0].classList.toggle("haha");
}
function up() {
  let x = document.getElementsByClassName("con");
  x[0].classList.toggle("hihi");
  x[0].classList.toggle("haha");
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  var i;
  var A = document.getElementsByClassName("photo");
  if (n > A.length - 6) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = A.length - 6;
  }
  for (i = 0; i < A.length; i++) {
    A[i].style.display = "none";
  }
  A[slideIndex - 1].style.display = "block";
  A[slideIndex].style.display = "block";
  A[slideIndex + 1].style.display = "block";
  A[slideIndex + 2].style.display = "block";
  A[slideIndex + 3].style.display = "block";
  A[slideIndex + 4].style.display = "block";
  A[slideIndex + 5].style.display = "block";
}
