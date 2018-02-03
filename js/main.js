const compactMenu = document.querySelector(".compact-menu");
const about = document.querySelector(".about");

compactMenu.addEventListener("click", function(event) {
    event.preventDefault();
    about.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
});