/////////////////////////////// image carousel used in the welcome section
// get welcome section
let welcomeSection = document.getElementById('welcome-image')
// make an array storing all the images used in the carousel
let imageGalley = [
    "../media-resources/img/street/street-1.jpg",
    '../media-resources/img/street/street-2.jpg',
    '../media-resources/img/street/street-3.jpg'
]

// loop over all images in the array, set the background of the welcome section to it and 
// change to the next image every 5 seconds
let i = 0
setInterval(function(){
    welcomeSection.style.backgroundImage = "url(" + imageGalley[i] + ")"
    i++
    // i is at the end of the array, so make it 0 again
    if(i === imageGalley.length){
        i = 0;
    }
}, 5000)
///////////////////////////////






/////////////////////////////// Image Modal Implementation
// get the modal
let modal = document.getElementById('image-gallery-modal')
// get the close button showing up with the modal
let closeModal = document.getElementsByClassName('modal-close')[0]
// close the modal when the button is clicked
closeModal.onclick = function () {
    modal.style.display = "none"
}
// get all the images used in the image gallery
let images = document.getElementsByClassName('gallery-images')
// get the image that is going to placed in the modal
let imageInModal = document.getElementById("modal-img")
// loop over the image array, check if they are clicked, 
// and display the modal with the image if it is
for(let i = 0; i < images.length; i++){
    images[i].onclick = function(){
         modal.style.display = "block";
         imageInModal.src = this.src;
         imageInModal.alt = this.alt;
    }
}
///////////////////////////////



///////////////////////////////Make client review boxes appear when scroll
function makeReviewBoxAppear() {
  // get review section
    let reviewSection = document.getElementById("client-review")
    // get all the review boxes
    let reviewBoxes = document.getElementsByClassName("review-box")
    // if the first review box is in the viewport, display all of the review boxes
    if (isInViewport(reviewSection)) {
    for(let i = 0; i < reviewBoxes.length; i++){
      reviewBoxes[i].style.opacity = 1;
    }
  }
}
///////////////////////////////


/////////////////////////////// trigger makeReviewBoxAppear() when scrolling
window.addEventListener("scroll", () => {
  makeReviewBoxAppear()
});
///////////////////////////////


