// # 1
const el1 = document.createElement("div");
el1.textContent = "Этот элемент создан при помощи DOM API";
document.body.appendChild(el1);

// #2

const el2 = document.createElement("div");
el2.classList.add("inner");
el2.textContent = "Этот элемент тоже создан при помощи DOM API";
el1.appendChild(el2);

// #3

el2.style.color = "red";

// #4

el1.addEventListener("click", function() {
    console.log("Этот текст говорит о том, что я всё сделал правильно");
});

// #5

const el3 = document.createElement("a");
el3.href = "https://loftschool.com";
el3.textContent = "ссылка на сайт LoftSchool";
document.body.appendChild(el3);

el3.addEventListener("click", function() {
    event.preventDefault();
    console.log("Я кликнул на ссылку https://loftschool.com");
});

// #6

const input = document.createElement("input");
const button = document.createElement("button");
button.textContent = "Вывести";
input.style.display = "block";
document.body.appendChild(input);
document.body.appendChild(button);

button.addEventListener("click", function() {
    event.preventDefault();
    console.log(input.value);
    input.value = "";
});