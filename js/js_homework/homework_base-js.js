// data types and variables

var myName = "Андрей";

console.log(myName);

var friendName = "Илья";

console.log(friendName);

// operator "if"

if (2 - 3 < 0) {
    console.log("it's true");
}

if (2 - 3 == 0) {
    console.log("it's true");
}

if (2 - 3 < 0) {
    console.log("it's true");
} else {
    console.log("it's false");
}

// operator "for"

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// functions

function sum(p1, p2, p3) {
    let res = p1 + p2 + p3;
    return res;
}

let summ = sum(10, 20, 30);
console.log(summ);

console.log(sum(3, 98, 21));
console.log(sum(34, 8, 2321));
console.log(sum(-4, 77, 0));

// arrays and objects

// #1

var arr = ["привет", "loftschool"];
arr.push(", я изучаю");
arr.push("javascript");

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// #2

var arr1 = [2, 434, 1, 500, 6, 1, 2, 3, 9, 732];

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 100) {
        console.log(arr1[i]);
    }
}

// #3

var man = {
    name: "Андрей",
    lastName: "Кустов",
    age: "20"
};

console.log(man.name);
console.log(man.lastName);
console.log(man.age);

man.favPL = "JS";

console.log(man.favPL);

// #4

function hello(human) {
    return
        "Привет, меня зовут " +
        human.name + " " 
        + human.lastName + " "
        + "и мне " + human.age
        + " лет!"
    ;
}

var helloRes = hello(man);

console.log(helloRes);