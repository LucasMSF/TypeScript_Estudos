//1 Tipo em interface

interface Product {
    name: string,
    price: number,
    isAvaliable: boolean
}

function showDetails(p: Product): void {
    console.log(`O produto ${p.name} custa ${p.price}`);
    console.log(`Status: ${p.isAvaliable ? 'disponível' : 'indisponível'}`);
}

const product: Product = {
    name: 'Air Jordan',
    price: 599.99,
    isAvaliable: true
}

showDetails(product);

//2 Propriedades opicionais em interfaces

interface User {
    name: string,
    role?: string
}

const userA: User = {
    name: 'Lucas',
    role: 'Admin'
}
const userB: User = {
    name: 'Ronaldo',

}

function checkUser(user: User): void {
    console.log(`Usuário: ${user.name}`)
    if(user.role) console.log(`Tipo: ${user.role}`)
}

checkUser(userA);
checkUser(userB);

//3 Readonly

interface Car {
    name: string,
    readonly wheels: number
}

const car: Car = {
    name: 'Ferrari',
    wheels: 4

}

console.log(car);
// car.wheels = 5;

//4 Index Signature
interface Coord {
    [key: string]: number
}

let coords: Coord = {
    x: 20
}

coords.y = 15;
coords.z = 76;

console.log(coords);

//Extending interfaces
interface Human {
    name: string,
    age: number
}
interface SuperHuman extends Human {
    superPowers: string[]
}

const shA: SuperHuman = {
    name: 'Eren',
    age: 16,
    superPowers: [
        'Attack on Titan'
    ]
}

console.log(shA);

//Intersection Types 
interface Character {
    name: string
}
interface Gun {
    type: string,
    caliber: number
}

type CharacterGun = Character & Gun;

const Arnold: CharacterGun = {
    name: 'Arnold Schwarzenegger',
    type: 'Shotgun',
    caliber: 12
}

console.log(Arnold);