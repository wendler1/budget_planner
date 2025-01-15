"use strict";

// log function
const log_it = function() {
  console.log('Hello from log_it');
}

log_it();

// -----------------------

// parameter function
const para_function = function(a) {
  console.log(a);
}

para_function(42);

// -----------------------

// name function
const name_function = function(x,y) {
    console.log(x + ' ' + y);
}

let name_1 = 'John';
let surname_1 = 'Doe';

name_function(name_1,surname_1);

// -----------------------

// math function
let bam = 42;
let bla = 5;
let fu = 277;
let tit = 66;
let lmao = 33;

const test = function(t,z) {
    console.log(t + z);
    console.log(t - z);
    console.log(t * z);
    console.log(t / z);
    console.log(t % z);
}

test(bam,bla);

// -----------------------


// test default parameter / undefined
const greeting = function(surname='Max', name='Mustermann', age=35) {
    console.log(`hello ${surname} ${name} you are ${age} yrs old`);
}
let surname_2 = 'andy';
let name_2 = 'mueller';
let age_2 = 34;

greeting(surname_2,name_2,age_2);
greeting(undefined,name_2,age_2);


// return statments
const multiplication = function(a, b) {
    return a * b;
}

let z_1 = 12;
let z_2 = 13;

let result = multiplication(z_1,z_2);
console.log(result);

// -----------------------

// why writing for a function const instead of let? 
// both works, but with const you can't ovveride the function somewhere else!!!
