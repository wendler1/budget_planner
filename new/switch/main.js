"use strict";


// switch statement
let name_a = "Andy";

switch (name_a) {
    case "Tom":
        console.log("Tom");
        break;
    case "Andy":
        console.log("Andy");
        break;    
    case "John":
        console.log("John");
        break;
    default:
        console.log("No one");
        break;
}

// multiple cases
let food = "bretzel";

switch (food) {
    case "bretzel":
    case "cake":
    case "cookie":
        console.log("i like");
        break;
    case "apple":
    case "banana":
        console.log("i also like");
        break;    
    default:
        console.log("nada");
        break;
}

// cahallange
// change if-else to switch

let produkt = "Brot";

if (produkt === "Brot") {
    console.log("1,89€");
} else if (produkt === "Milch") {
    console.log("0,79€");
} else if (produkt === "Schokolade" || produkt === "Chips") {
    console.log("0,99€");
} else if (produkt === "Apfel") {
    console.log("0,79€");
} else {
    console.log("Produkt wurde nicht gefunden!");
}

switch (produkt) {
    case "Brot":
        console.log("1,89€");
        break;
    case "Milch":
    case "Apfel":
        console.log("0,79€");
        break;  
    case "Schokolade":
    case "Chips":
        console.log("0,99€");
        break;
    default:    
        console.log("Produkt wurde nicht gefunden!");
        break;    
}
