//AOS Link
AOS.init();

//Navbar 
const navbar = document.getElementById("main-navbar");
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll");
  } else {
    navbar.classList.remove("navbar-after-scroll");
  }
});
 
//  Onclick opening sections in services 
function showSection(sectionId) {
  // Hide the services section
  document.querySelector('.services').style.display = 'none';

  // Show the targeted section
  document.getElementById(sectionId).style.display = 'block';
  //hide the banner image 
  document.querySelector('#what').style.display = 'none';
}

function goBack() {
    //hide the banner image 
    document.querySelector('#what').style.display = 'block';
  // Show the services section
  document.querySelector('.services').style.display = 'block';

  // Hide all the hidden sections
  var hiddenSections = document.getElementsByClassName('hidden-section');
  for (var i = 0; i < hiddenSections.length; i++) {
    hiddenSections[i].style.display = 'none';
  }
}
  

document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  // Function to display the current slide
  function showSlide() {
    slides[currentSlide].classList.add("active");
  }

  // Function to hide all slides
  function hideSlides() {
    slides.forEach(function(slide) {
      slide.classList.remove("active");
    });
  }

  // Function to move to the next slide
  function nextSlide() {
    hideSlides();
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }

  // Automatically move to the next slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Show the initial slide
  showSlide();
});








