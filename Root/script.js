let slideIndex = 0;
function slide() {
    let mySlides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > mySlides.length) {slideIndex = 1}
    mySlides[slideIndex-1].style.display = "block";
    setTimeout(slide, 2000); // Change image every 2 seconds
}
slide();


