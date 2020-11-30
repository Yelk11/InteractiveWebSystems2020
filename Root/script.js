let slideIndex = 0;
function slide() {
    let mySlides = document.getElementsByClassName("mySlides");//grabs the element
    for (let i = 0; i < mySlides.length; i++) {//for loop each slide amd alternate the display setting
        mySlides[i].style.display = "none";
    }
    slideIndex++;//counter
    if (slideIndex > mySlides.length) {slideIndex = 1}
    mySlides[slideIndex-1].style.display = "block";
    setTimeout(slide, 2000); // Change image every 2 seconds
}
slide();//runs the function


//by Lawrence Jasper