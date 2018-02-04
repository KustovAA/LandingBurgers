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

const menuPoints = document.querySelectorAll(".about__item");
const menuPointsNav = document.querySelectorAll(".nav__item-link");

for (let i = 0; i < menuPoints.length; i++) {
    menuPoints[i].addEventListener("click", function(event) {
        event.preventDefault();
    });
    menuPointsNav[i].addEventListener("click", function(event) {
        event.preventDefault();
    });
}