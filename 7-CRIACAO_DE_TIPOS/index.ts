//1 Generics

function showData<T>(arg: T): void {
    console.log(arg)
}

showData(100);
showData('Lucas');

//2 Contraints em Generics

function showProduct<T extends {name: string}>(obj: T): void {
    console.log(obj);
}

showProduct<{name: string, price: number}>({name: 'Iphone 12', price: 1200.99});

//3 Generics em interfaces

interface GenericObj<C, E> {
    name: string,
    color: C,
    engine: E
}

const car: GenericObj<string, number> = {
    name: 'Opala',
    color: 'Azul',
    engine: 1.8
}

console.log(car);

//4 Type parameters
function getKey<T, K extends keyof T>(obj: T, key: K): void {
    console.log(`O elemento ${key} está presente e o seu valor é ${obj[key]}`);
}

getKey({name: 'Lucas'}, 'name');

//5 Keyof operator

interface Character {
    name: string,
    age: number,
}

const Maria: Character = {
    name: 'Maria das Graças',
    age: 70
}

type koCharacter = keyof Character

function showAttribute(c: Character, attr: koCharacter): void {
    console.log(c[attr]);
}

showAttribute(Maria, 'name');

//6 Typeof type operator

const Name: string = 'Lucas'
const OtherName: typeof Name = 'João';

console.log(Name, OtherName);

//7 Index access type

interface Truck {
    km: number,
    kg: number
}

const NewTruck: Truck = {
    km: 50000,
    kg: 1000
}

type Km = Truck['km']

function showKm(km: Km): void {
    console.log(km);
}

showKm(NewTruck.km);

//8 Conditional Types

interface X {

};

interface Y extends X {

};

type Z = Y extends X ? string : number;

let z: Z = 'Lucas';

interface U {
    showString(): string
};

type T = U extends {showString(): string} ? number : boolean;

let t: T = 10;

console.log(z, t);

//9 Template literals type

type Tl1 = 'Test';
type Tl2 = 'Teste';

type TLiterals = `${Tl1}` | `${Tl2}`
