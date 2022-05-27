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
function people(p: {name: string, age: number}) {
    console.log(`${p.name}, ${p.age} anos`, typeof p);
}

const p: {name: string, age: number} = {
    name: "Lucas",
    age: 18
}

people(p);

//6.1 Propriedades Opicionais
function opt(name: string, lastName?: string) {
    console.log(`Nome: ${lastName ? name + " " + lastName : name}`)
}

function opto(nums: {a: number, b?:number}) {
    console.log(nums.a);
    if(nums.b) console.log(nums.b);
}

opt("Lucas");
opt("Lucas", "Mathias");

opto({a: 1});
opto({a: 1, b: 2});
