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
    console.log(`while: ${x}`);
}

// for loops

for (let z = 0; z < 5; z++) {
    if (z == 3) {
        continue;
    } else if (z == 4) {
        break;
    }
    console.log(z);
}
console.log("end for")




 