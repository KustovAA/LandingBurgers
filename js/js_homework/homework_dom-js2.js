const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
var shift = 0;

right.addEventListener("click", function() {
    event.preventDefault();
    if (shift < 5) {
        items.style.marginLeft = (++shift) * (-100) + "px";
        items.children[shift].style.borderLeft = "1px solid #444";
    }
});

left.addEventListener("click", function() {
    event.preventDefault();
    if (shift > 0) {
        items.children[shift].style.borderLeft = "none";
        items.style.marginLeft = (--shift) * (-100) + "px";
    }
});
