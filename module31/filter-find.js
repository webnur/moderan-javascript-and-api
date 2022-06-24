
const numbers = [14, 17, 18, 2, 5, 45, 56, 21];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumber = numbers.filter(number => number < 10);
// console.log(smallNumber);


const products = [
    {name: 'water bottle', price: 500, color: 'yellow'},
    {name: 'smart phone', price: 1300, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'golden'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 20, color: 'white'},
]

const expensive = products.filter(product => product.price < 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'black');
// console.log(blacks)

const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);