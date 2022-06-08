//1 Primeiro decorator
function myDecorator() {
    console.log('Início do decorator...');

    return function (target: any, properyKey: string, descriptor: PropertyDescriptor) {
        console.log('Execução da função do callback do decorator...')
        console.log(target, properyKey, descriptor);
        target[properyKey]('Método sendo excutado dentro de decorator')

    }
}


class MyClass {
    @myDecorator()
    testing(log: any = 'método de teste dentro da classe.') {
        console.log(log);
    }
}

const myClass = new MyClass();
myClass.testing();

//2 Múltiplos decorators
function decA() {
    return (target: any,
        properyKey: string,
        descriptor: PropertyDescriptor) => {
            console.log('Decorator A');
    }
}
function decB() {
    return (target: any,
        properyKey: string,
        descriptor: PropertyDescriptor) => {
            console.log('Decorator B');
    }
}
function decC() {
    return (target: any,
        properyKey: string,
        descriptor: PropertyDescriptor) => {
            console.log('Decorator C');
    }
}

class MultipleClass {
    @decC()
    @decB()
    @decA()
    testing(log: any = 'Testando múltiplos decorators') {
        console.log(log);
    }
}

const multipleClass = new MultipleClass();
multipleClass.testing();

//3 Class Decorator
function classDec(constructor: Function) {
    if(constructor.name == 'User') console.log('Criação de usuário');
}

@classDec
class User {
    name: string;

    constructor(n: string) {
        this.name = n;
    }
}

const user =  new User('Lucas');
console.log(user.name);

//4 Modificando método com decorator
function enumerable(state: boolean) {
    return (target: any,
        properyKey: string,
        descriptor: PropertyDescriptor) => {
            descriptor.enumerable = state;
    }
}

class Enumerable {
    @enumerable(false)
    showEnumereble(): void {
        console.log(this);
    }
}

const enumerableClass = new Enumerable();
enumerableClass.showEnumereble();

//5 Acessor decorator 
class Monster {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    @enumerable(true)
    get showName() {
        return this.name;
    }

    @enumerable(true)
    get showAge() {
        return this.age;
    }
}

const monster = new Monster('Godzilla', 188);
console.log(monster.showName, monster.showAge);
console.log(monster);

//6 Property Decorator
class Id {
    private id: number;

    constructor(i: number) {
        this.id = i;
    }

    get getId() {
        return this.id;
    }
}

//7 Exemplo real de class decorator (Add createdAt)
function createdAt(constructor: Function) {  
    constructor.prototype.createdAt = new Date();
}

interface Materials {
    name: string
}

@createdAt
class Book implements Materials {
    name: string;
    createdAt!: Date

    constructor(n: string) {
        this.name = n;
    }
}

@createdAt
class Pen implements Materials {
    name: string;
    createdAt!: Date

    constructor(n: string) {
        this.name = n;
    }
}

const pen = new Pen('Bic');
const book = new Book('Domquixote');

console.log(pen, book)

//8 Exemplo real de methid decorator
function checkIfPosted() {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        let childFunction = descriptor.value;
        descriptor.value = function (...args: any[]){
            if(args[1] == true) {
                console.log('Já postado!');
                return null;
            } else {
               childFunction.apply(this, args);    
            }
        }
        return descriptor
    }    
}

class Post {
    alreadyPosted: boolean = false

    @checkIfPosted()
    post(content: string, alreadyPosted: boolean) {
        this.alreadyPosted = true
        console.log(`Post: ${content}`);
    }
}

const post = new Post;
post.post('Meu Post.', post.alreadyPosted)
post.post('Meu Post.', post.alreadyPosted)

//7 Exemplo real de property decorator

function maxLength(limit: number) {
    return (target: any, propertyKey: string) => {
        let value: string

        const getter= () => {
            console.log('sus')
            return value 
        }

        const setter= (newValue: string) => {
            if(newValue.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres`)
                return
            } else {
                value = newValue;
            }

            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter
            });
        }
    }
}

class Admin {
    @maxLength(10)
    username: string

    constructor(un: string) {
        this.username = un;
    }

    set setUser(u: string) {
        this.username = u
    }
}

const adm = new Admin('lucasmathias123456')
