var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1 Funções sem retorno
function withoutReturn() {
    console.log("Sem retorno");
}
withoutReturn();
//2 Callback como argumento
function greeting(name) {
    return "Bem-vindo " + name;
}
function preGreeting(callback, pName) {
    console.log(callback(pName));
}
preGreeting(greeting, 'Lucas');
//3 Generic Functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
console.log(merge({ name: 'Lucas' }, { age: 18 }));
//4 Constraints nas Generics functions
function biggest(a, b) {
    return (+a > +b) ? a : b;
}
console.log(biggest(1, 10));
console.log(biggest("10", "20"));
//5 Especificando Argumentos Genéricos
function mergeArray(arrA, arrB) {
    return arrA.concat(arrB);
}
console.log(mergeArray([1, 2], [3, 4]));
console.log(mergeArray([1, 2], ["3", "4"]));
//6 Parâmetros Opicionais
function modernGreeting(name, prefix) {
    return "Ol\u00E1".concat(prefix ? ' ' + prefix : '', " ").concat(name, ", tudo bem?");
}
console.log(modernGreeting('Lucas'));
console.log(modernGreeting('Lucas', 'Dr.'));
//7 Parâmetros default
function sumDefault(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log(sumDefault(10, 15));
//8 Unknown (Em tipos mais complexos deve passar por narrowing)
function doSomething(x) {
    if (Array.isArray(x))
        console.log(x[0]);
    else
        console.log(x);
}
doSomething([1, 2, 3]);
