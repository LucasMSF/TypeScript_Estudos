//1 Propriedades da classe ! = sem valor inicial
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var newUser = new User();
newUser.name = 'Lucas';
console.log(newUser);
//2 Constructor
var NewUser = /** @class */ (function () {
    function NewUser(n, a) {
        this.name = n;
        this.age = a;
    }
    return NewUser;
}());
console.log((new NewUser('Lucas', 18)));
//3 Atributo Readonly
var Car = /** @class */ (function () {
    function Car(n) {
        this.wheels = 4;
        this.name = n;
    }
    return Car;
}());
console.log((new Car("Uno")).wheels);
//4 Herança e super
var Machine = /** @class */ (function () {
    function Machine(n) {
        this.name = n;
    }
    return Machine;
}());
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(n, g) {
        var _this = _super.call(this, n) || this;
        _this.guns = g;
        return _this;
    }
    return KillerMachine;
}(Machine));
var km = new KillerMachine('Batmóvel', {
    machineGun: {
        name: 'BatMachine',
        power: 'Multiples shoots'
    },
    fire: {
        name: 'BatFire',
        power: 'Explosive Fire'
    }
});
console.log(km);
//5 Métodos
var Dwarf = /** @class */ (function () {
    function Dwarf(n) {
        this.name = n;
    }
    Dwarf.prototype.greeting = function () {
        return "Ol\u00E1! Meu nome \u00E9 ".concat(this.name);
    };
    return Dwarf;
}());
console.log((new Dwarf('Luquinhas')).greeting());
//6 this = keyword que referencia a instancia atual do objeto para chamar seus métodos e propriedades
