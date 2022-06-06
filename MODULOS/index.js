"use strict";
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
