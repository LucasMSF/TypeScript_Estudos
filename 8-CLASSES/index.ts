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

