const sum = (...numbers) => {
    let sum = 0;
    for (let i=0; i<numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
};

const numbersToSum = [1, 2, 3];

const total = sum(numbersToSum);

console.log(total);
