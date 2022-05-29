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