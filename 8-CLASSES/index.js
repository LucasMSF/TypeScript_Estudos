"use strict";
//1 Propriedades da classe ! = sem valor inicial
class User {
}
const newUser = new User();
newUser.name = 'Lucas';
console.log(newUser);
//2 Constructor
class NewUser {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
console.log((new NewUser('Lucas', 18)));
//3 Atributo Readonly
class Car {
    constructor(n) {
        this.wheels = 4;
        this.name = n;
    }
}
console.log((new Car("Uno")).wheels);
//4 Herança e super
class Machine {
    constructor(n) {
        this.name = n;
    }
}
class KillerMachine extends Machine {
    constructor(n, g) {
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
    constructor(n) {
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
    constructor(n, s) {
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
    set setX(x) {
        this.x = x;
    }
    set setY(y) {
        this.y = y;
    }
    get getCoords() {
        return { x: this.x, y: this.y };
    }
}
const coords = new Coords;
coords.setX = 18;
coords.setY = 30;
console.log(coords.getCoords);
class PeopleWare {
    constructor(n) {
        this.name = n;
    }
    get getName() {
        return 'Your name is ' + this.name;
    }
}
console.log((new PeopleWare('Lucas')).getName);
//10 Override de métodos
class NewClass {
    newMethod() {
        console.log('Super Class');
    }
}
class NewChildClass extends NewClass {
    newMethod() {
        console.log('Children Class');
        super.newMethod();
    }
}
const NCClass = new NewChildClass;
NCClass.newMethod();
//11 Visibilidades
class Visibilities {
}
//12 Static Members
class Static {
    static get getVar() {
        return this.var;
    }
}
Static.var = 'Static Var';
console.log(Static.getVar);
//13 Generic class
class Item {
    constructor(f, s) {
        this.first = f;
        this.second = s;
    }
}
console.log((new Item('Lucas', 18)));
//14 Parameters Properties
class Properties {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    get person() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
console.log((new Properties('Lucas', 18)).person);
//15 Class Expression
const myClass = class {
    constructor(n) {
        this.name = n;
    }
};
console.log((new myClass('Lucas class expression')).name);
//16 Abstract Class
class AbsClass {
    constructor(n) {
        this.name = n;
    }
    get showGreeting() {
        return "Olá " + this.name + " Essa classe herda uma abstrata";
    }
}
class AbsExtend extends AbsClass {
    constructor(n) {
        super(n);
    }
}
console.log((new AbsExtend('Lucas')).showGreeting);
