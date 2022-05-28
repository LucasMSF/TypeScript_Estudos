//1 Type Guard
type sumVar = string | number;

function sum(a: sumVar, b: sumVar): void {
    if(typeof a == "string" && typeof b == "string") console.log(parseFloat(a) + parseFloat(b));
    else if(typeof a == "number" && typeof b == "number") console.log(a + b);
    else console.log("Erro!");
}

sum("1", "5");
sum(1, 5);
sum("1", 5);

//2 checando se valor existe
function operation(nums: number[], op?: string | undefined): void {
    if(op == "multiply") console.log(nums.reduce((last, current) => last * current));
    else console.log(nums.reduce((last, current) => last + current));
}

operation([2, 3], "multiply");
operation([2, 3]);

//3 instaceof

class User {
    public name: string;

    constructor(n: string) {
        this.name = n;
    }

    protected greeting(n: string) {
        console.log(n);    
    }
}
class SuperUser extends User {
    constructor(n: string) {
        super(n);
    }
}


let user: object = new User('Rodolfo');
let superUser : object = new SuperUser('Lucas');

console.log(user, superUser);

function userWelcome(user: object): void {
    if(user instanceof SuperUser) {
        console.log(`Bem-vindo ${user.name} (Admin)`);
    } else if(user instanceof User) {
        console.log(`Bem-vindo ${user.name}`);
    } else {
        console.log(`Erro`);  
    }
}

userWelcome(user);
userWelcome(superUser);

//4 Operador in
class Dog {
    public name: string;
    public breed: string;

    constructor(n:string, b?:string) {
        this.name = n;
        if(b) this.breed = b;
    }
}

let dogA = new Dog('Ralph');
let dogB = new Dog('Thor', 'Pastor Alemão');

function checkDog(dog: Dog): void {
    if('breed' in dog) console.log(`O cachorro ${dog.name} é ${dog.breed}`);
    else console.log(`O cachorro ${dog.name} é SRD`);
}

checkDog(dogA);
checkDog(dogB);

//Desafio
function checkReview(note: number | false, message?: string): void {
    if(typeof note === 'number') console.log(`Nota: ${note}${message ? ", Mensagem: " + message : ""}`);
    else console.log("Sem avaliação");
}

checkReview(5, "Legal!");
checkReview(3);
checkReview(false);

