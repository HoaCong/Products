
function opennav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
};

function closenav() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n); 
};

// function currentSlides(n) {
//   showSlides(slideIndex = n);
// };
function showSlides(n) {
  var i;
  var A = document.getElementsByClassName("myPicture");
  if (n > A.length-1){
    slideIndex = A.length;
    document.getElementsByClassName("next")[0].style.display="none";
    document.getElementById("demo").innerText = n;
  } else  if (n < 2){
    slideIndex = 1;
    document.getElementsByClassName("back")[0].style.display="none";
    document.getElementById("demo").innerText = n;
          }else{
            document.getElementById("demo").innerText = n;
            n++;
            document.getElementsByClassName("back")[0].style.display="block";
            document.getElementsByClassName("next")[0].style.display="block";
          }          
  for (i = 0; i < A.length; i++) {
      A[i].style.display = "none";
  } ;
  A[slideIndex-1].style.display = "block";
  document.getElementById("mode").innerText = i; 
};
