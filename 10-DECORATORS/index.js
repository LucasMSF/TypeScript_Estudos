"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1 Primeiro decorator
function myDecorator() {
    console.log('Início do decorator...');
    return function (target, properyKey, descriptor) {
        console.log('Execução da função do callback do decorator...');
        console.log(target, properyKey, descriptor);
        target[properyKey]('Método sendo excutado dentro de decorator');
    };
}
class MyClass {
    testing(log = 'método de teste dentro da classe.') {
        console.log(log);
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myClass = new MyClass();
myClass.testing();
//2 Múltiplos decorators
function decA() {
    return (target, properyKey, descriptor) => {
        console.log('Decorator A');
    };
}
function decB() {
    return (target, properyKey, descriptor) => {
        console.log('Decorator B');
    };
}
function decC() {
    return (target, properyKey, descriptor) => {
        console.log('Decorator C');
    };
}
class MultipleClass {
    testing(log = 'Testando múltiplos decorators') {
        console.log(log);
    }
}
__decorate([
    decC(),
    decB(),
    decA()
], MultipleClass.prototype, "testing", null);
const multipleClass = new MultipleClass();
multipleClass.testing();
//3 Class Decorator
function classDec(constructor) {
    if (constructor.name == 'User')
        console.log('Criação de usuário');
}
let User = class User {
    constructor(n) {
        this.name = n;
    }
};
User = __decorate([
    classDec
], User);
const user = new User('Lucas');
console.log(user.name);
//4 Modificando método com decorator
function enumerable(state) {
    return (target, properyKey, descriptor) => {
        descriptor.enumerable = state;
    };
}
class Enumerable {
    showEnumereble() {
        console.log(this);
    }
}
__decorate([
    enumerable(false)
], Enumerable.prototype, "showEnumereble", null);
const enumerableClass = new Enumerable();
enumerableClass.showEnumereble();
//5 Acessor decorator 
class Monster {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    get showName() {
        return this.name;
    }
    get showAge() {
        return this.age;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const monster = new Monster('Godzilla', 188);
console.log(monster.showName, monster.showAge);
console.log(monster);
//6 Property Decorator
class Id {
    constructor(i) {
        this.id = i;
    }
    get getId() {
        return this.id;
    }
}
//7 Exemplo real de class decorator (Add createdAt)
function createdAt(constructor) {
    constructor.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(n) {
        this.name = n;
    }
};
Book = __decorate([
    createdAt
], Book);
let Pen = class Pen {
    constructor(n) {
        this.name = n;
    }
};
Pen = __decorate([
    createdAt
], Pen);
const pen = new Pen('Bic');
const book = new Book('Domquixote');
console.log(pen, book);
//8 Exemplo real de methid decorator
function checkIfPosted() {
    return (target, key, descriptor) => {
        let childFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (args[1] == true) {
                console.log('Já postado!');
                return null;
            }
            else {
                childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post: ${content}`);
    }
}
__decorate([
    checkIfPosted()
], Post.prototype, "post", null);
const post = new Post;
post.post('Meu Post.', post.alreadyPosted);
post.post('Meu Post.', post.alreadyPosted);
//7 Exemplo real de property decorator
function maxLength(limit) {
    return (target, propertyKey) => {
        let value;
        const getter = () => {
            console.log('sus');
            return value;
        };
        const setter = (newValue) => {
            if (newValue.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} caracteres`);
                return;
            }
            else {
                value = newValue;
            }
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter
            });
        };
    };
}
class Admin {
    constructor(un) {
        this.username = un;
    }
    set setUser(u) {
        this.username = u;
    }
}
__decorate([
    maxLength(10)
], Admin.prototype, "username", void 0);
const adm = new Admin('lucasmathias123456');
