
function add(num, num1 = 0){
    
    // system one
    // num1 = num1 || 0;
    const result = num + num1;
    return result;
}

const adding = add(20)
// console.log(adding);


function fullName(first, last= 'sultana'){
    const name = first + last;
    return name
}

const name = fullName('amena ')
console.log(name);