/////////////////////////////// ------- Image Carousel -------//

// Make a object that stores all the indexes of images in the carousel
let indexes = {
  firstSliderIndex: 1,
  secondSliderIndex: 2,
  thirdSliderIndex: 3
}

//Below calls showSlides() fourth time since there are four pages of recipes
showSlides(indexes.firstSliderIndex, 'first', 'firstSliderIndex')
showSlides(indexes.firstSliderIndex, 'second', 'firstSliderIndex')
showSlides(indexes.firstSliderIndex, 'third', 'firstSliderIndex')
showSlides(indexes.firstSliderIndex, 'fourth', 'firstSliderIndex')

// Switch to previous/next slide
function plusSlides (n, id, index) {
  // n - number of slide,
  //id - page id,
  //index - current slide number in slider
  showSlides((indexes[index] += n), id, index)
}

// Switch to a specific slide using the slider dots
function currentSlide (n, id, index) {
  showSlides((indexes[index] = n), id, index)
}

// showSlides() is activated when either one of the above functions is called,
// and it hides/show slides depending on the arguments
function showSlides (n, id, index) {
  let i
  //Choose all images
  let slides = document.querySelectorAll(`#${id} .mySlides`)
  //Choose all slider dots
  let dots = document.querySelectorAll(`#${id} .slider-dot`)
  //if n is greater than slides length, set it to 1 to
  //return to the first image
  if (n > slides.length) {
    indexes[index] = 1
  }
  //if n becomes less than 1, set it to the index of the last image
  if (n < 1) {
    indexes[index] = slides.length
  }
  // hide all the slides by default
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  // Remove dots class "slider-active" by default
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' slider-active', '')
  }

  //Display the chosen slide to active, and minus 1 because the first index is 1
  slides[indexes[index] - 1].style.display = 'block'
  //Give the chosen dot "slider-active" class
  dots[indexes[index] - 1].className += ' slider-active'
}

// ------- Image Carousel -------//
///////////////////////////////




/////////////////////////////// ------- Read More Button -------//
//get all the read more buttons
const buttons = document.getElementsByClassName('read_more')

const onButtonClick = event => {
  //get clicked button
  const button = event.target
  //get the button attribute
  const dataTarget = button.getAttribute('data-target')
  //get hidden text
  const extraContent = document.getElementById(dataTarget)
  //check the content of the button, and change it to the other state
  button.innerHTML =
    button.innerHTML === 'Show Less' ? 'Show More' : 'Show Less'
  //display the hidden texts
  extraContent.classList.toggle('show')
}

//attach the above function to the clicked button
const attachingEvent = e => e.addEventListener('click', onButtonClick)

//For all the read more button, call the above function
Array.prototype.forEach.call(buttons, attachingEvent)
// ------- Read More Button -------//
///////////////////////////////
