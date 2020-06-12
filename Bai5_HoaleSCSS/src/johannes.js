//Menu
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

//SLide anh
let slideIndex = 1;
show1(slideIndex);
show2(slideIndex);

function plusSlides(n) {
  show1((slideIndex += n));
}
function plusSlides1(n) {
  show2((slideIndex += n));
}

function show1(n) {
  let i;
  let A = document.getElementsByClassName("photo");
  if (n > A.length - 4) {
    slideIndex = 2;
  } else if (n < 1) {
    slideIndex = A.length - 5;
  }
  for (i = 0; i < A.length; i++) {
    A[i].style.display = "none";
  }
  A[slideIndex - 1].style.display = "block";
  A[slideIndex].style.display = "block";
  A[slideIndex + 1].style.display = "block";
  A[slideIndex + 2].style.display = "block";
  A[slideIndex + 3].style.display = "block";
}

function show2(m) {
  let i;
  let A = document.getElementsByClassName("photo-follow");
  if (m > A.length - 6) {
    slideIndex = 2;
  } else if (m < 1) {
    slideIndex = A.length - 7;
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
