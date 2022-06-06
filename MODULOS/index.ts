//1 importação de arquivos
import exportGreeting from "./greet";

exportGreeting('Lucas');

//2 Importando variável (Obrigatório usar destructuring já que não possui export default)
import { age } from "./variable";

console.log("Idade: " + age);