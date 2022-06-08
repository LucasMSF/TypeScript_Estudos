//1 importação de arquivos
import exportGreeting from "./greet";

exportGreeting('Lucas');

//2 Importando variável (Obrigatório usar destructuring já que não possui export default)
import { age } from "./variable";

console.log("Idade: " + age);

//3 Múltiplo import/export
import { a, b, multiple } from "./multiple";

console.log(a);
console.log(b);
multiple();

//4 Alias em importações
import { ChangeName as cn } from "./changeName";

console.log(cn);

//5 Importando tudo
import * as myNumbers from "./numbers";

console.log(myNumbers.n1, myNumbers.n2, myNumbers.n3, "Sum(): " + myNumbers.sum(1,2));

//6 Importando tipos
import { Human } from "./types";

class NewHuman implements Human {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greeting(): string {
        return `Olá ${this.name}. Você tem ${this.age} anos`;
    }
}

const NewPeople = new NewHuman('Lucas', 18);

console.log(NewPeople);