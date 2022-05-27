//1 - Numbers

let x: number = 10;
let y: number = 10.09987;

console.log(typeof x, typeof y);
console.log(y, y.toFixed(2));

//2 - String

const firstName: string = "Lucas";

console.log(firstName + " DEV", typeof firstName);

//3 - Boolean

let bool: boolean = true

console.log(bool, typeof bool);

//4 inference e annotation

//inference
const a = "teste a";
//annotation
const b: string = "teste b";

console.log(typeof a, typeof b);

//DESAFIO 

let n: number = 18;
let string = n.toString();

console.log(`Eu tenho ${string} anos.`, typeof string);