//1 Generics
function showData(arg) {
    console.log(arg);
}
showData(100);
showData('Lucas');
//2 Contraints em Generics
function showProduct(obj) {
    console.log(obj);
}
showProduct({ name: 'Iphone 12', price: 1200.99 });
var car = {
    name: 'Opala',
    color: 'Azul',
    engine: 1.8
};
console.log(car);
//4 Type parameters
function getKey(obj, key) {
    console.log("O elemento ".concat(key, " est\u00E1 presente e o seu valor \u00E9 ").concat(obj[key]));
}
getKey({ name: 'Lucas' }, 'name');
