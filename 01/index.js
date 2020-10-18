var x = 80;
var y = 50;

var suma = x+y;

const g = 9.8;



var weight = (mass)=>{
    return mass*g;// Weight N
}

var mass = 50;//Kilograms

var w = weight(mass);
var message = `El peso para ${mass}Kg son ${w}N`;


console.log(message);