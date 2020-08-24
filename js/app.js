/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let i = 1; i < 5; i++) {
  let li = document.createElement("LI");
  document.getElementById("navbar__list").appendChild(li);
  li.innerHTML = `<a href="#section${i}" class="menu__link">Section ${i}</a>`;
}

// Add class 'active' to section when near top of viewport
//
if (!!window.IntersectionObserver) {
  let is_exist = false;
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        //select the element with href=#section{number} to make it active
        const element = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (!entry.isIntersecting) {
          is_exist = true;
          //remove active class when be far from the section while scrolling
          entry.target.classList.remove("your-active-class");
          //remove the class from navbar when be far from the section while scrolling
          element.classList.remove("my-active-state");
          //add the default class (menu__link) when be far from the section while scrolling
          element.classList.add("menu__link");
        } else if (is_exist) {
          //add active class when pass the section while scrolling
          entry.target.classList.add("your-active-class");
          //add myActiveClass to anchoe when pass the section while scrolling
          element.classList.add("my-active-state");
          //remove the default class menu__link to set myAtiveClass when focus on section
          element.classList.remove("menu__link");
          isExist = false;
        }
      });
    },
    { threshold: 1 }
  );
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

// Scroll to anchor ID using scrollIntoView 
const Anchors = document.querySelectorAll('a[href^="#"]');
function scrollToTarget(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}
Anchors.forEach((anchor) => {
  anchor.addEventListener("click", scrollToTarget);
});

//Add a scroll to top on the page that’s only visible when the user scrolls below the fold of the page.

var myArrow = document.getElementById("arrow-top");

// When the user scrolls down 0px from the top of the document, show the icon
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    myArrow.style.display = "block";
  } else {
    myArrow.style.display = "none";
  }
}

// When the user clicks on the iscon, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

myArrow.addEventListener("click", topFunction);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
