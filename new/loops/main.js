"use strict";


// while loops

let x = 0;

while (x < 10) {
    x++;
    if (x == 5) {
        continue;
    } else if (x == 7) {
        break;
    }
    //console.log(`while: ${x}`);
}

// for loops

for (let z = 0; z < 5; z++) {
    if (z == 3) {
        continue;
    } else if (z == 4) {
        break;
    }
    //console.log(z);
}
//console.log("end for")

let names = ['peter','susanne','joe','gabriel','shiteater'];

for (let i = 0; i < names.length; i++) {
    //console.log(`hello ${names[i]}`);
}

let food = [
  ['apple','banana','lemon'],
  ['carrots','potato','salad'],
  ['haribo','chips','chocolate']  
];

//console.log(food);

for (let j = 0; j < food.length; j++) {
    //console.log(`eat ${food[j]}`);
    for (let y = 0; y < food[j].length; y++) {
        // console.log(food[j][y]);
        
    }
}

// for each

let numbers = [2,55,953,21,745,36];

numbers.forEach(function(a){
    //console.log(a);
})

// for in (durchläuft Eigenschaften) and for of (durchläuft Werte)

let my_array = ['Peter','Sepp','Depp'];

let my_object = {
    name : 'Andy',
    givenname : 'Andreas',
    age : 34
};

for (let a in my_array) {
    console.log(a);
}

for (let o in my_object) {
    console.log(o);
}

 