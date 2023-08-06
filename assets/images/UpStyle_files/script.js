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
  











const images = document.querySelectorAll('.card-img');
let currentImageIndex = 0;

function showNextImage() {
  images.forEach(image => {
    image.classList.remove('active');
  });

  currentImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 1000);






