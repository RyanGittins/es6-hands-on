const fiftyFifty = new Promise((resolve, reject) => {
    const num   = Math.random();
    const error = (num < 0.5);

    if (error) {
        reject("error message");
    } else {
        resolve(num);
    }
});
