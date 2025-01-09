"use strict";

let given_name = "Max";
let name = "Mustermann";
let age = "42"; 

let full_name = `${given_name} ${name}`;
console.log(full_name);

let welcome = `Hallo ${full_name}, du bist ${age} Jahre alt.`;
console.log(welcome);

let multi_line_template_string_1 = `hello ${full_name}!
you are ${age} years old.
how are you?`;
console.log(multi_line_template_string_1);

let concatenate_template_string_2 = `hello ${full_name}! `+
`you are ${age} years old. ` +
`how are you?`;
console.log(concatenate_template_string_2);