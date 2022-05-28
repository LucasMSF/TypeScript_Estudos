//1 - Arrays

let numbers: number[] = [1,2,3];
numbers.push(4);

let names: string[] = ['Lucas', 'Maria'];


console.log(numbers, typeof numbers);
console.log(names, typeof names);

//1.2 Sintaxe alternativa para arrays
let fruits: Array<string> = ['apple', 'banana', 'orange'];
console.log(fruits, typeof fruits);

//2 Any
let randow: any = [1, "1", [1], {1: "1"}, true];
console.log(randow, typeof randow);

//3 Tipos em parâmetros e retornos
function mult(a: number, b: number): number {
    return a * b;
}

console.log(mult(10, 20), typeof mult);

//4 Função anônima
setTimeout(function() {
    console.log("Olá");
}, 2000);

//5 Objetos
function people(p: {name: string, age: number}): void {
    console.log(`${p.name}, ${p.age} anos`, typeof p);
}

const p: {name: string, age: number} = {
    name: "Lucas",
    age: 18
}

people(p);

//6 Propriedades Opicionais
function opt(name: string, lastName?: string): void {
    console.log(`Nome: ${lastName ? name + " " + lastName : name}`)
}

function opto(nums: {a: number, b?:number}): void {
    console.log(nums.a);
    if(nums.b) console.log(nums.b);
}

opt("Lucas");
opt("Lucas", "Mathias");

opto({a: 1});
opto({a: 1, b: 2});

//7 Union Types
let data: string|number = 19;
data = "String";

console.log(data);

function type(user: string | boolean): string | boolean {
    if(typeof user === 'boolean') return "Usuário não indentificado!";
    else return "Usuário: " + user;
}

console.log(type("lmathias"));
console.log(type(false));

//8 Type alias
type ustate = string | boolean;

function typeAlias(user: ustate) {
    if(typeof user === 'boolean') return "Usuário não indentificado!";
    else return "Usuário: " + user;   
}

console.log(type("moliveira"));
console.log(type(false));

//9 Interface
interface Point {
    x: number,
    y: number,
    z: number,
}

function viewPoint(cord: Point): void {
    console.log(`x: ${cord.x}, y: ${cord.y}, z: ${cord.z}`)
}

viewPoint({x: 10, y: 20, z: 45});

//10 Interface x Type Alias
interface Person {
    name: string
}
interface Person {
    age: number
}

let lucas: Person = {
    name: 'Lucas',
    age: 18
}

type Car = {
    name: string
}

/* type Car = {
    year: Date
} */

//11 Literal types
type One = 1;
let one: One = 1;

type Dct = "Left" | "Right" | "Center";

function move(direction: Dct): void {
    console.log(`Move for ${direction}`);
}

move("Left");

//12 non null Assertion Operator
const myP: HTMLElement | null = document.getElementById('my-p');

console.log(myP!.innerText);

//13 Bigint (Exemplo de alteração do ts.config)
let bigNum: bigint = 100321312300n + 300321312300n;
console.log(bigNum, typeof bigNum);

//14 Symbol
let SymbolA: symbol = Symbol("a");
let SymbolB: symbol = Symbol("a");

console.log(SymbolA == SymbolB, SymbolA === SymbolB);