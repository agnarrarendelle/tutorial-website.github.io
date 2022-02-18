
// This function takes two id corresponding to two pages
// of the article section. It hides one page and display
// the other, scrolling to top of the page after that
function changePage( show, hide ) {
  document.getElementById(hide).style.display="none";
  document.getElementById(show).style.display="block";
  scrollToTop()
}

