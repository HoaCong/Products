
function openmenu() {
    document.getElementById("myMenu").style.display = "block";
    document.getElementById("myOver").style.display = "block";
};

function closemenu() {
    document.getElementById("myMenu").style.display = "none";
    document.getElementById("myOver").style.display = "none";
};

function down(){
    document.getElementById("up").style.display = 'block';
    document.getElementById("menulearn").style.display = 'block';    
    document.getElementById("down").style.display = 'none';
};
function up(){
    document.getElementById("down").style.display = 'block';
    document.getElementById("menulearn").style.display = 'none';
    document.getElementById("up").style.display = 'none';
};

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};
function showSlides(n) {
    var i;
    var A = document.getElementsByClassName("myPicture");
    if (n > A.length - 1) {
        slideIndex = A.length;
        document.getElementsByClassName("next")[0].style.display = "none";
    } else if (n < 2) {
        slideIndex = 1;
        document.getElementsByClassName("back")[0].style.display = "none";
    } else {
        document.getElementsByClassName("back")[0].style.display = "block";
        document.getElementsByClassName("next")[0].style.display = "block";
    }
    for (i = 0; i < A.length; i++) {
        A[i].style.display = "none";
    };
    A[slideIndex - 1].style.display = "block";
};