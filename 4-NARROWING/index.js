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
function sum(a, b) {
    if (typeof a == "string" && typeof b == "string")
        console.log(parseFloat(a) + parseFloat(b));
    else if (typeof a == "number" && typeof b == "number")
        console.log(a + b);
    else
        console.log("Erro!");
}
sum("1", "5");
sum(1, 5);
sum("1", 5);
//checando se valor existe
function operation(nums, op) {
    if (op == "multiply")
        console.log(nums.reduce(function (last, current) { return last * current; }));
    else
        console.log(nums.reduce(function (last, current) { return last + current; }));
}
operation([2, 3], "multiply");
operation([2, 3]);
//instaceof
var User = /** @class */ (function () {
    function User(n) {
        this.name = n;
    }
    User.prototype.greeting = function (n) {
        console.log(n);
    };
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(n) {
        return _super.call(this, n) || this;
    }
    return SuperUser;
}(User));
var user = new User('Rodolfo');
var superUser = new SuperUser('Lucas');
console.log(user, superUser);
function userWelcome(user) {
    if (user instanceof SuperUser) {
        console.log("Bem-vindo ".concat(user.name, " (Admin)"));
    }
    else if (user instanceof User) {
        console.log("Bem-vindo ".concat(user.name));
    }
    else {
        console.log("Erro");
    }
}
userWelcome(user);
userWelcome(superUser);
//Operador in
var Dog = /** @class */ (function () {
    function Dog(n, b) {
        this.name = n;
        if (b)
            this.breed = b;
    }
    return Dog;
}());
var dogA = new Dog('Ralph');
var dogB = new Dog('Thor', 'Pastor Alemão');
function checkDog(dog) {
    if ('breed' in dog)
        console.log("O cachorro ".concat(dog.name, " \u00E9 ").concat(dog.breed));
    else
        console.log("O cachorro ".concat(dog.name, " \u00E9 SRD"));
}
checkDog(dogA);
checkDog(dogB);
//Desafio
function checkReview(note, message) {
    if (typeof note === 'number')
        console.log("Nota: ".concat(note).concat(message ? ", Mensagem: " + message : ""));
    else
        console.log("Sem avaliação");
}
checkReview(5, "Legal!");
checkReview(3);
checkReview(false);
