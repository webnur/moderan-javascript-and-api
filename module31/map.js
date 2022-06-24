



const numbers = [4, 6, 8, 10];
const outPut2 = [];

const doubleIt = number => number * 2;
for (const number of numbers) {
    const relust = doubleIt(number);
    outPut2.push(relust)
}

// console.log(outPut2);

//const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);
console.log(output);



