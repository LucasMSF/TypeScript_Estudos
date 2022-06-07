"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1 importação de arquivos
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)('Lucas');
//2 Importando variável (Obrigatório usar destructuring já que não possui export default)
const variable_1 = require("./variable");
console.log("Idade: " + variable_1.age);
//3 Múltiplo import/export
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.multiple)();
//4 Alias em importações
const changeName_1 = require("./changeName");
console.log(changeName_1.ChangeName);
//5 Importando tudo
const myNumbers = __importStar(require("./numbers"));
console.log(myNumbers.n1, myNumbers.n2, myNumbers.n3, "Sum(): " + myNumbers.sum(1, 2));
class NewHuman {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greeting() {
        return `Olá ${this.name}. Você tem ${this.age} anos`;
    }
}
const NewPeople = new NewHuman('Lucas', 18);
console.log(NewPeople);
