//1 Propriedades da classe ! = sem valor inicial

class User {
    public name!: string;
    public age!: string;
}

const newUser = new User();

newUser.name = 'Lucas'

console.log(newUser);

//2 Constructor

class NewUser {
    private name: string;
    private age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}

console.log((new NewUser('Lucas', 18)));

//3 Atributo Readonly

class Car {
    name: string;
    readonly wheels: number = 4;

    constructor(n: string) {
        this.name = n;
    }
}

console.log((new Car("Uno")).wheels);

//4 Herança e super

class Machine {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

interface Gun {
    name: string,
    power: string
}

class KillerMachine extends Machine {
    guns: {[key: string]: Gun}

    constructor(n:string, g: {[key: string]: Gun}) {
        super(n);
        this.guns = g;
    }
}

const km = new KillerMachine('Batmóvel', {
    machineGun: {
        name: 'BatMachine',
        power: 'Multiples shoots'
    },
    fire: {
        name: 'BatFire',
        power: 'Explosive Fire'
    },
});

console.log(km);

//5 Métodos

class Dwarf {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    greeting() {
        return `Olá! Meu nome é ${this.name}`;
    }
}

console.log((new Dwarf('Luquinhas')).greeting());

//6 this = keyword que referencia a instancia atual do objeto para chamar seus métodos e propriedades

//7 Getters

class Person {
    name: string;
    surname: string;

    constructor(n: string, s: string) {
        this.name = n;
        this.surname = s;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }
}



const Lucas = new Person('Lucas', 'Mathias');
console.log(Lucas.fullName);

//8 Setters

class Coords {
    x!: number;
    y!: number;

    set setX(x: number) {
        this.x = x;    
    }

    set setY(y: number) {
        this.y = y;
    }

    get getCoords(): {x: number, y: number} {
        return {x: this.x, y: this.y};
    }
}

const coords = new Coords;

coords.setX = 18;
coords.setY = 30;

console.log(coords.getCoords);

//9 Herança de interface
interface showName {
    get getName(): string
}

class PeopleWare implements showName {
    private name: string;

    constructor(n: string) {
        this.name = n;
    }

    get getName(): string {
        return 'Your name is ' + this.name;
    }
}

console.log((new PeopleWare('Lucas')).getName);

//10 Override de métodos
class NewClass {
    newMethod(): void {
        console.log('Super Class');
    }
}

class NewChildClass extends NewClass {
    newMethod(): void {
        console.log('Children Class');
        super.newMethod();
    }
}

const NCClass = new NewChildClass;
NCClass.newMethod();

//11 Visibilidades

class Visibilities {
    public v1: any //Visibilidade pública - Escopo geral
    protected v2: any //Visibilidade pública - Escopo interno e subclasses
    private v3: any //Visibilidade pública - Escopo interno
}

//12 Static Members

class Static {
    private static var: string = 'Static Var';

    public static get getVar() {
        return this.var;
    }
}
console.log(Static.getVar);

//13 Generic class

class Item<T, U> {
    first: T;
    second: U;

    constructor(f: T, s: U) {
        this.first = f;
        this.second = s;
    }
}

console.log((new Item('Lucas', 18)));

//14 Parameters Properties

class Properties {
    constructor(public name: string, private age: Number) {
        this.name = name;
        this.age = age;
    }

    public get person() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

console.log((new Properties('Lucas', 18)).person);

//15 Class Expression

const myClass = class<T> {
    name: T

    constructor(n: T) {
        this.name = n
    }
}

console.log((new myClass('Lucas class expression')).name);

//16 Abstract Class

abstract class AbsClass {
    name: string

    constructor(n: string) {
        this.name = n
    }

    get showGreeting() {
        return "Olá " + this.name + " Essa classe herda uma abstrata";
    }
}

class AbsExtend extends AbsClass {
    constructor(n: string) {
        super(n);
    }
}

console.log((new AbsExtend('Lucas')).showGreeting);