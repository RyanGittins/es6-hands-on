const document = {
    querySelectorAll: () => ['element1', 'element2', 'element3']
};

const cols = document.querySelectorAll('.column');

const col1 = cols[0];
const col3 = cols[2];

console.log("col1:", col1);
console.log("col3:", col3);
