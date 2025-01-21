"use strict";

let account = {
    iban: "DE89370400440532013000",
    bic: "COBADEFFXXX",
    owner: {
        name: "Max Mustermann",
        address: {
            street: "Musterstraße 12",
            city: "Musterstadt",
            zip: "12345"
        }
    },
    balance: 1000,
    cashin(i) {
        this.balance += i;  
    },
    cashout(o) {
        this.balance -= o;  
    },
    active: true    
};

account.cashin(250);
console.log(account.balance); // 1250

account.cashout(500);
console.log(account.balance); // 750
