let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  // Reset index if it exceeds the number of slides
    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
