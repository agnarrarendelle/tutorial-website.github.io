
/////////////////////////////// Section 1: add functionality to nav button that displays menu links on mobile when clicked -----//
// Toggle nav button and menu active class when triggered 
function mobileMenu() {
    navbarButton.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// Remove their active class when triggered
function closeMenu() {
    navbarButton.classList.remove("active");
    navMenu.classList.remove("active");
}

//select nav button, menu that displays when clicking on button and nav links
const navbarButton = document.querySelector(".navbarButton");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

//Apply an event listener to nav button that detect click, and trigger mobileMenu() when it does
navbarButton.addEventListener("click", mobileMenu);
// When any link is clicked, remove the active class via closeMenu() and direct to another page
navLink.forEach(n => n.addEventListener("click", closeMenu));
// Section 1 ends -----//
///////////////////////////////



/////////////////////////////// Section 2: A function that check if any element is in viewport -----//

function isInViewport(element) {
  // Get the distance from four direction relative to the element's parent element
  let top = element.offsetTop;
  let left = element.offsetLeft;
  let width = element.offsetWidth;
  let height = element.offsetHeight;

  while(element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
    left += element.offsetLeft;
  }
// Return true if any part of the element appears in the viewport
  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
// Section 2 ends -----//
///////////////////////////////



/////////////////////////////// Section 3: A function that scroll the page to top smoothly  -----//
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
// Section 3 ends -----//
///////////////////////////////

