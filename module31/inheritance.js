class TeamMember{
    name;
    address ='BD';
    constructor(name, address){
        this.name = name;
        this.address = address
    }
}


class Support extends TeamMember{
    designation = 'Support Web Dev';
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'start a supprot session');
    }
}


class StudentCare extends TeamMember{
    designation = 'Student Care Support center';
    buildARoutine(student){
        console.log(this.name, 'Build a Routine for', student)
    }
}



class NeptuneDev extends TeamMember{
    designation = 'Neptune web developer team';
    codeEditor;
    constructor(name, address,editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'neptune app release version', version)
    }
}


const amirr = new Support('amir khan', 'BD', 11);
const salman = new Support('solaiman khan', 'Dubai', 12);
// console.log(amirr)
// console.log(salman)

const alia = new StudentCare('Alia Zaman', 'mumbai')
// console.log(alia)

const amena = new NeptuneDev('amena sultana', 'chandpur city', 'vs code')
// console.log(amena)
amena.releaseApp('1.5.6')