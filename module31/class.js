
class Support {
    name;
    designation = 'Support Web Dev';
    address ='BD';
    constructor(name, address){
        this.name = name;
        this.address = address
    }
    startSession(){
        console.log(this.name, 'start a supprot session');
    }
}

const amirr = new Support('amir khan', 'BD');
const salman = new Support('solaiman khan', 'Dubai');
// console.log(amirr)
// console.log(salman)

amirr.startSession();
salman.startSession();
