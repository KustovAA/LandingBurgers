function delay(seconds) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, seconds * 1000);
    });
}

delay(5).then(function() {
    console.log("прошло 5 секунд");

    return delay(3);
}).then(function() {
    console.log("прошло 3 секунды");

    return delay(7);
}).then(function() {
    console.log("прошло 7 секунд");
});

const button = document.querySelector(".button");
const city = document.querySelector(".cities");

button.addEventListener("click", function() {
    fetch("https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json")
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            let cities = JSON.parse(text);
            for (let i = 0; i < cities.length; i++) {
            city.innerHTML += cities[i].name + "<br>";
            }
        });
});