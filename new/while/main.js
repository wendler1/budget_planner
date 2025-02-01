"use strict";

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

 