"use strict";

/* 

1. Create an object called `account` with the following properties:

objects

let iban = "DE89370400440532013000";
let bic = "COBADEFFXXX";
let balance = 1000;
let active = true; 
*/

let account = {
    iban: "DE89370400440532013000",
    bic: "COBADEFFXXX",
    balance: 1000,
    active: true    
};

console.log(account);

// ----------------------------------------------------------------



/*
2. Create an object called `owner_1` with the following properties:

nested objects

*/

let owner_1 = {
    surename: "Max",
    name: "Mustermann",
    sex: "male",
    age: 25    
};

let owner_2 = {
    surename: "Maria",
    name: "Musterfrau",
    sex: "female",
    age: 22
};

let account_nested = {
    iban: "DE89370400440532013000",
    bic: "COBADEFFXXX",
    owner: owner_1,
    balance: 1000,
    active: true    
};

console.log(account_nested);

// ----------------------------------------------------------------


/*
3. read values with dot notaion . 

*/

console.log(account_nested.iban);

// ----------------------------------------------------------------


/*
4. set properties in object with dot notaion

*/

// change value
account_nested.balance = 1500;

// add new property
account_nested.limit = 500;

console.log(account_nested);

// ----------------------------------------------------------------


/*
5. read values with bracket notation []

*/

console.log(account_nested["iban"]);

// ----------------------------------------------------------------


/* 6. set properties in object with bracket notation    

*/

// change value
account_nested["balance"] = 2000;

// ----------------------------------------------------------------


/* 7. comparing objects

*/

let car_1 = {
    brand: "BMW",
    model: "X5",
    year: 2020  
};

let car_2 = {
    brand: "BMW",
    model: "X5",
    year: 2020  
};

// challange: write a function who compare two objects, and return true if they are equal, otherwise false

function compareObjects(obj1, obj2) {
    if (obj1['brand'] === obj2['brand'] && obj1['model'] === obj2['model'] && obj1['year'] === obj2['year']) {
        return true;
    }else {
        return false;
    }
};

console.log(compareObjects(car_1, car_2));
