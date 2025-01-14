"use strict";

// // log function
// const log_it = function() {
//   console.log('Hello from log_it');
// }

// log_it();

// // parameter function
// const para_function = function(a) {
//   console.log(a);
// }

// para_function(42);

// // name function
// const name_function = function(x,y) {
//     console.log(x + ' ' + y);
// }

// let name = 'John';
// let surname = 'Doe';

// name_function(name,surname);

// // math function
// let bam = 42;
// let bla = 5;
// let fu = 277;
// let tit = 66;
// let lmao = 33;

// const test = function(t,z) {
//     console.log(t + z);
//     console.log(t - z);
//     console.log(t * z);
//     console.log(t / z);
//     console.log(t % z);
// }

// test(bam,bla);


// // test default parameter / undefined

// const greeting = function(surname='Max', name='Mustermann', age=35) {
//     console.log(`hello ${surname} ${name} you are ${age} yrs old`);
// }
// let surname = 'andy';
// let name = 'mueller';
// let age = 34;

// greeting(surname,name,age);
// greeting(undefined,name,age);


// return

const multiplication = function(a, b) {
    return a * b;
}

let z_1 = 12;
let z_2 = 13;

let result = multiplication(z_1,z_2);
console.log(result);