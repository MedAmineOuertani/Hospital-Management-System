// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
//var sidebar = document.getElementById("side-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var sticky_2 = sidebar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
 /* if (window.pageYOffset >= sticky_2) {
    sidebar.classList.add("sticky");
  } else {
    sidebar.classList.remove("sticky");
  }*/
}