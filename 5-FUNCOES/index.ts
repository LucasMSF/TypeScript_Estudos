//1 Funções sem retorno
function withoutReturn(): void {
    console.log("Sem retorno");
}

withoutReturn();

//2 Callback como argumento
function greeting(name: string): string {
    return "Bem-vindo " + name;
}

function preGreeting(callback: (name: string) => string, pName: string): void {
    console.log(callback(pName));
}

preGreeting(greeting, 'Lucas');

//3 Generic Functions
function firstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(firstElement([1,2,3]));
console.log(firstElement(["a", "b", "c"]));

function merge<T, U>(objA: T, objB: U): T & U{
    return {
        ...objA,
        ...objB
    };
}

console.log(merge({name: 'Lucas'}, {age: 18}));

//4 Constraints nas Generics functions
function biggest<T extends string | number>(a: T, b: T): T {
    return (+a > +b) ? a : b;
}

console.log(biggest(1, 10));
console.log(biggest("10", "20"));

//5 Especificando Argumentos Genéricos
function mergeArray<T>(arrA: T[], arrB: T[]): T[] {
    return arrA.concat(arrB);
}

console.log(mergeArray([1,2], [3,4]));
console.log(mergeArray<number | string>([1,2], ["3","4"]));

//6 Parâmetros Opicionais
function modernGreeting(name: string, prefix?: string): string {
    return `Olá${prefix ? ' ' + prefix : ''} ${name}, tudo bem?`;
}

console.log(modernGreeting('Lucas'));
console.log(modernGreeting('Lucas', 'Dr.'));

//7 Parâmetros default
function sumDefault(a: number, b: number = 10): number {
    return a + b;
}

console.log(sumDefault(10, 15));

//8 Unknown (Em tipos mais complexos deve passar por narrowing)
function doSomething(x: unknown): void {
    if(Array.isArray(x)) console.log(x[0]);
    else console.log(x);
}

doSomething([1,2,3]);