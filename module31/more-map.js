const friends = ['Amena Sultana', 'Amena Nur', 'Amena islam', 'Nurul Islam', 'Rayhan'];

const flengths = friends.map(friend => friend.length)
// console.log(flengths);

const products = [
    {name: 'water bottle', price: 500, color: 'yellow'},
    {name: 'smart phone', price: 1300, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'golden'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 20, color: 'white'},
]


const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// console.log(productPrice)




products.forEach(product => console.log(product.name))
