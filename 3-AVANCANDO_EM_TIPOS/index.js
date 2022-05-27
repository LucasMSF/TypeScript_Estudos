//1 - Arrays
var numbers = [1, 2, 3];
numbers.push(4);
var names = ['Lucas', 'Maria'];
console.log(numbers, typeof numbers);
console.log(names, typeof names);
//1.2 Sintaxe alternativa para arrays
var fruits = ['apple', 'banana', 'orange'];
console.log(fruits, typeof fruits);
//2 Any
var randow = [1, "1", [1], { 1: "1" }, true];
console.log(randow, typeof randow);
//3 Tipos em parâmetros e retornos
function mult(a, b) {
    return a * b;
}
console.log(mult(10, 20), typeof mult);
//4 Função anônima
setTimeout(function () {
    console.log("Olá");
}, 2000);
//5 Objetos
function people(p) {
    console.log("".concat(p.name, ", ").concat(p.age, " anos"), typeof p);
}
var p = {
    name: "Lucas",
    age: 18
};
people(p);
//6 Propriedades Opicionais
function opt(name, lastName) {
    console.log("Nome: ".concat(lastName ? name + " " + lastName : name));
}
function opto(nums) {
    console.log(nums.a);
    if (nums.b)
        console.log(nums.b);
}
opt("Lucas");
opt("Lucas", "Mathias");
opto({ a: 1 });
opto({ a: 1, b: 2 });
//7 Union Types
var data = 19;
data = "String";
console.log(data);
function type(user) {
    if (typeof user === 'boolean')
        return "Usuário não indentificado!";
    else
        return "Usuário: " + user;
}
console.log(type("lmathias"));
console.log(type(false));
function typeAlias(user) {
    if (typeof user === 'boolean')
        return "Usuário não indentificado!";
    else
        return "Usuário: " + user;
}
console.log(type("moliveira"));
console.log(type(false));
function viewPoint(cord) {
    console.log("x: ".concat(cord.x, ", y: ").concat(cord.y, ", z: ").concat(cord.z));
}
viewPoint({ x: 10, y: 20, z: 45 });
var lucas = {
    name: 'Lucas',
    age: 18
};
var one = 1;
function move(direction) {
    console.log("Move for ".concat(direction));
}
move("Left");
//non null Assertion Operator
var myP = document.getElementById('my-p');
console.log(myP.innerText);
//Bigint (Exemplo de alteração do ts.config)
var bigNum = 100321312300n + 300321312300n;
console.log(bigNum, typeof bigNum);
