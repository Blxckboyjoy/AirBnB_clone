// get the slideshow container element
var slideshowContainer = document.querySelector('.slideshow-container');

// get all the images in the slideshow
var slideshowImages = document.querySelectorAll('.slideshow-container img');

// set the index of the currently displayed image
var currentImageIndex = 0;

// show the first image on page load
slideshowImages[currentImageIndex].style.display = 'block';

// create a function to switch to the next image
function nextImage() {
  // hide the current image
  slideshowImages[currentImageIndex].style.display = 'none';
  // update the index to the next image
  currentImageIndex++;
  // reset the index to 0 if it exceeds the number of images
  if (currentImageIndex >= slideshowImages.length) {
    currentImageIndex = 0;
  }
  // show the next image
  slideshowImages[currentImageIndex].style.display = 'block';
}

// set an interval to switch to the next image every 3 seconds
setInterval(nextImage, 3000);
