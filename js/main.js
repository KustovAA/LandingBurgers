const compactMenu = document.querySelector(".compact-menu");
const about = document.querySelector(".about");

compactMenu.addEventListener("click", function(event) {
    event.preventDefault();
    about.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
});


const detailsClose = document.querySelector(".details__close-wrap");
const details = document.querySelector(".details");
const components = document.querySelector(".burgers__components-icon");

components.addEventListener("click", function() {
    if (parseInt(window.innerWidth) <= 768) {
        components.style.opacity = "1";
        details.style.opacity = "1";
        details.style.left = "100%";
    }
});

detailsClose.addEventListener("click", function() {
    components.style.opacity = "0.4";
    details.style.opacity = "0";
    details.style.left = "-9999px";
});

const navList = document.querySelector(".nav__list");
const aboutList = document.querySelector(".about__list");

navList.addEventListener("click", function(event) {
    if (event.target.classList.contains("nav__item-link")) {
        event.preventDefault();
    }
});

aboutList.addEventListener("click", function() {
    if (event.target.classList.contains("about__item-link")) {
        event.preventDefault();
    }
});