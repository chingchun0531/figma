const d = new Date();
document.getElementById('date').innerHTML = d;

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1){
         slideIndex = slides.length
    }
    
}