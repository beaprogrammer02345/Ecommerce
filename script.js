const btnMobileNav = document.querySelector('.btn-mobile-nav');
const navbar = document.querySelector('.navbar');

btnMobileNav.addEventListener('click', function () {
    navbar.classList.toggle('nav-open');
});

// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
// const images = document.querySelectorAll('.collection-img');
// let currentIndex = 0;

// function showImage(index) {
//     images.forEach((img, i) => {
//       img.style.display = i === index ? 'block' : 'none';
//     });
// }




// prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop around
//     showImage(currentIndex);
// });

// nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length; // Loop around
//     showImage(currentIndex);
// });

// // Initially show the first image
// showImage(currentIndex);



//referesh code
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const images = document.querySelectorAll('.collection-img');
let currentIndex = 0;

// Conversion function: Use base 10px
const emToPx = (em) => em * 16; // Since 1em = 10px with your CSS
const mobileBreakpoint = emToPx(26.2); // Convert 26.2em to px

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function adjustForScreenSize() {
  const currentWidth = window.innerWidth;
  console.log(`Window width: ${currentWidth}px, Mobile breakpoint: ${mobileBreakpoint}px`);

  if (currentWidth <= mobileBreakpoint) {
    console.log("Mobile view: Enabling slider");
    showImage(currentIndex);
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  } else {
    console.log("Desktop view: Showing all images");
    images.forEach(img => (img.style.display = 'inline-block'));
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }
}

// Event listeners for slider buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Adjust on window resize and initial load
window.addEventListener('resize', adjustForScreenSize);
adjustForScreenSize();
