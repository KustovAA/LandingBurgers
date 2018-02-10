function filter(input, than) {

    if (input.length == 0) {
        throw new Error("Пустой массив");
    }

    let res = [];
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            throw new Error("Массив должен быть из чисел");
        }

        if (input[i] < 0) {
            throw new Error("Все числа в массиве должны быть положительными");
        }

        if (input[i] > than) {
            res.push(input[i]);
        }
    }
    return res;
}

try {
    console.log(filter([12, 100, 34, 65, 10], 60));
    console.log(filter([12, 100, 34, 65, 10], 20));
    console.log(filter([], 20));
    console.log(filter([12, 100, 34, 65, "dfsdg"], 20));
    console.log(filter([12, 100, 34, 65, -34], 20));   
} catch (error) {
    console.log(error.message);
}