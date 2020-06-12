// $(document).ready(function () {
//   $(window).scroll(function () {
//     let position = $(this).scrollTop();
//     if (position >= 200) {
//       $(".navbar").addClass("custom-navbar");
//     } else {
//       $(".navbar").removeClass("custom-navbar");
//     }
//   });
// });
setInterval(function () {
  plusSlides(+1);
}, 6000);

let Index = 1;
showSlides(Index);
showPosts(Index);

function plusSlides(n) {
  showSlides((Index += n));
}
function plusPosts(n) {
  showPosts((Index += n));
}

function currentSlide(n) {
  showSlides((Index = n));
}

function showSlides(n) {
  let i;
  let A = document.getElementsByClassName("photo");
  let dots = document.getElementsByClassName("dot");
  if (n > A.length) {
    Index = 1;
  }
  if (n < 1) {
    Index = A.length;
  }
  for (i = 0; i < A.length; i++) {
    A[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" choose", "");
  }
  A[Index - 1].style.display = "block";
  dots[Index - 1].className += " choose";
}
function showPosts(n) {
  let i;
  let B = document.getElementsByClassName("posts");
  if (n > B.length - 1) {
    Index = B.length;
    document.getElementsByClassName("next")[0].style.display = "none";
  } else if (n < 2) {
    Index = 1;
    document.getElementsByClassName("back")[0].style.display = "none";
  } else {
    document.getElementsByClassName("back")[0].style.display = "block";
    document.getElementsByClassName("next")[0].style.display = "block";
  }
  for (i = 0; i < B.length; i++) {
    B[i].style.display = "none";
  }
  B[Index - 1].style.display = "block";
}
