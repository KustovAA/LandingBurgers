// tablets and phone menu

const compactMenu = document.querySelector(".compact-menu");
const about = document.querySelector(".about");
let canScroll = true;

compactMenu.addEventListener("click", function(event) {
    event.preventDefault();
    about.classList.toggle("open");

    canScroll = !canScroll;
});

// burger components

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


// team accordeon

const teamList = document.querySelector(".team__list");

teamList.addEventListener("click", function(event) {
    let target = event.target;
    let list = document.querySelectorAll("." + target.classList[0]);
    
    target.classList.toggle("active");

    for (let i = 0; i < list.length; i++) {
        if (list[i] !== target) {
            list[i].classList.remove("active");
        }
    }
});


// menu accordeon

const menuList = document.querySelector(".menu__list");

menuList.addEventListener("click", function(event) {
    let target = event.target;
    if (target.classList.contains("menu__type-title")) {
        let list = document.querySelectorAll("." + target.classList[0]);

        target
            .parentElement
            .classList
            .toggle("active");

        let widthWrap = parseInt(window.innerWidth) > 768 ? parseInt(window.innerWidth) * 0.65 : parseInt(window.innerWidth);

        if (window.getComputedStyle(target.parentElement.nextSibling.nextSibling).width !== "0px") {
            target
                .parentElement
                .nextSibling
                .nextSibling
                .style.width = "0px";
        } else {
            target
                .parentElement
                .nextSibling
                .nextSibling
                .style.width = widthWrap - parseInt(window.getComputedStyle(target.parentElement).width) * 3 + "px";
        }

        for (let i = 0; i < list.length; i++) {
            if (list[i] !== target) {
                list[i].parentElement.classList.remove("active");
                list[i].parentElement
                    .nextSibling
                    .nextSibling
                    .style.width = "0px";
            }
        }
    }
});

// one page scroll

const wrapper = document.querySelector(".wrapper");

let scrollLength = 0;

const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");
const s7 = document.querySelector(".s7");
const s8 = document.querySelector(".s8");

const s = [s1, s2, s3, s4, s5, s6, s7, s8];

let inScroll = false;
let sections = document.querySelectorAll(".sections");

sections[0].classList.add("active");

document.addEventListener("wheel", function(event) {
    event.preventDefault();

    if (canScroll) {
        if (!inScroll) {
            inScroll = true;
            if (event.deltaY > 0) {
                if (scrollLength > -700) {
                    s[scrollLength / (-100)].parentElement.classList.toggle("active");
                    scrollLength -= 100;
                    s[scrollLength / (-100)].parentElement.classList.toggle("active");
                    wrapper.style.top = scrollLength + "%";
                } else if (scrollLength == -700) {
                    inScroll = false;
                } 
            } else {
                if (scrollLength < 0) {
                    s[scrollLength / (-100)].parentElement.classList.toggle("active");
                    scrollLength += 100;
                    s[scrollLength / (-100)].parentElement.classList.toggle("active");
                    wrapper.style.top = scrollLength + "%";
                } else if (scrollLength == 0) {
                    inScroll = false;
                }
            }
        }
    }
});

wrapper.addEventListener("transitionend", function() {
    setTimeout(function() {
        inScroll = false;
    }, 800);
})

for (let i = 0; i < s.length; i++) {
    s[i].addEventListener("click", function(event) {
        event.preventDefault();
        wrapper.style.top = (i) * (-100) + "%";
        scrollLength = (i) * (-100);

        for (let i = 0; i < s.length; i++) {
            s[i].parentElement.classList.remove("active");
        }

        s[i].parentElement.classList.add("active");
    });
}

const weSec = document.querySelector(".weSec");
const burgersSec = document.querySelector(".burgersSec");
const teamSec = document.querySelector(".teamSec");
const menuSec = document.querySelector(".menuSec");
const reviewSec = document.querySelector(".reviewSec");
const conSec = document.querySelector(".conSec");
const empty = document.querySelector(".hidden");

const sec = [empty, weSec, burgersSec, teamSec, menuSec, reviewSec, empty, conSec];

for (let i = 0; i < sec.length; i++) {
    sec[i].addEventListener("click", function(event) {
        event.preventDefault();
        canScroll = true;
        about.classList.remove("open");
        wrapper.style.top = (i) * (-100) + "%";
        scrollLength = (i) * (-100);

        for (let i = 0; i < s.length; i++) {
            s[i].parentElement.classList.remove("active");
        }

        s[i].parentElement.classList.add("active");
    });
}

const  delScroll = document.querySelectorAll(".delScroll");

for (let i = 0; i < delScroll.length; i++) {
    delScroll[i].addEventListener("click", function(event) {
        event.preventDefault();
        wrapper.style.top = "-600%";
        scrollLength = -600;

        s[0].parentElement.classList.remove("active");
        s[2].parentElement.classList.remove("active");
        s[6].parentElement.classList.add("active");
    });
}

const arrowDown = document.querySelector(".arrow__scroll");

arrowDown.addEventListener("click", function() {
    s[scrollLength / (-100)].parentElement.classList.toggle("active");
    scrollLength -= 100;
    s[scrollLength / (-100)].parentElement.classList.toggle("active");
    wrapper.style.top = scrollLength + "%";
});

// slider

const leftArrow = document.querySelector(".burgers__left-scroll");
const rightArrow = document.querySelector(".burgers__right-scroll");
const burgerSlider = document.querySelector(".burgers__slider");

let startPos = parseInt(window.innerWidth) > 768 ? 202 : 208;
let endPos = parseInt(window.innerWidth) > 768 ? -198 : -204;
let step = parseInt(window.innerWidth) > 768 ? 100 : 103;
if (parseInt(window.innerWidth) <= 480) {
    startPos = 218;
    endPos = -206;
    step = 106;
}
if (parseInt(window.innerWidth) <= 320) {
    startPos = 308;
    endPos = -264;
    step = 143;
}
let pos = startPos;
let startPosFake = startPos + step;
let endPosFake = endPos - step;

leftArrow.addEventListener("click", function() {
    burgerSlider.style.transition = "left 0.7s";
    if (pos == startPos) {
        pos += step;
        setTimeout(function() {
            burgerSlider.style.transition = "none";
            pos = endPos;
            burgerSlider.style.left = pos + "%";
        }, 700);
    } else {
        pos += step;
    }

    burgerSlider.style.left = pos + "%";
});

rightArrow.addEventListener("click", function() {
    burgerSlider.style.transition = "left 0.7s";
    if (pos == endPos) {
        pos -= step;
        setTimeout(function() {
            burgerSlider.style.transition = "none";
            pos = startPos;
            burgerSlider.style.left = pos + "%";
        }, 700);
    } else {
        pos -= step;
    }

    burgerSlider.style.left = pos + "%";
});

// popup review

const reviews = document.querySelector(".reviews");
const popup = document.querySelector(".reviews__popup");
const popupWrap = document.querySelector(".reviews__popup-wrap");
const closePopup = document.querySelector(".reviews__popup-btn");

reviews.addEventListener("click", function(event) {
    event.preventDefault();
    let target = event.target;
    if (target.parentElement.classList.contains("reviews__review-more")) {
        popup.classList.add("active");
        popupWrap.classList.add("active");
    }
});

closePopup.addEventListener("click", function(event) {
    popup.classList.remove("active");
    popupWrap.classList.remove("active");
});