// TODO:       // it is selecting the div class carouselbox
const carousel = document.querySelector('.carouselbox');
// TODO:       // it is selecting the next and previous button element
const next = carousel.querySelector('.next');
const prev = carousel.querySelector('.prev');
let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO:  // it is when you click the img it opens the img location
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});

// TODO:    // it listens for when you click on the next button
next.addEventListener('click', function (event) {
  // TODO:           // it stops it from doing the previous click function. it opens the image location
  // it previous the avtivation of any other events in 
    event.stopPropagation();

  navigate(1);
});

// TODO:        // its listens to when you click the previous button and goes to the previous index in the array
prev.addEventListener('click', function (event) {
  // TODO: it would change the previous button to open the image location
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
