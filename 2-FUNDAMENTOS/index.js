//1 - Numbers
var x = 10;
var y = 10.09987;
console.log(typeof x, typeof y);
console.log(y, y.toFixed(2));
//2 - String
var firstName = "Lucas";
console.log(firstName + " DEV", typeof firstName);
//3 - Boolean
var bool = true;
console.log(bool, typeof bool);
//4 inference e annotation
//inference
var a = "teste a";
//annotation
var b = "teste b";
console.log(typeof a, typeof b);
//DESAFIO 
var n = 18;
var string = n.toString();
console.log("Eu tenho ".concat(string, " anos."), typeof string);
