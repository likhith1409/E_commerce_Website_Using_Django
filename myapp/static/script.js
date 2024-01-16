document.addEventListener("DOMContentLoaded", function() {
    var slidesContainer = document.querySelector(".slideshow-container");
    var slides = document.querySelectorAll(".slide");
    var slideIndex = 0;
  
    function showSlide(n) {
      slides.forEach(function(slide) {
        slide.style.transform = "translateX(" + n + "%)";
      });
    }
  
    function plusSlides(n) {
      slideIndex += n;
      if (slideIndex > slides.length - 1) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  
      showSlide(-slideIndex * 100);
    }
  
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
  
    prev.addEventListener("click", function() {
      plusSlides(-1);
    });
  
    next.addEventListener("click", function() {
      plusSlides(1);
    });
  
    setInterval(function() {
      plusSlides(1);
    }, 5000); // Adjust the interval as needed (currently set to 5000 milliseconds or 5 seconds)
  });
  