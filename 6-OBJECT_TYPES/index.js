//1 Tipo em interface
function showDetails(p) {
    console.log("O produto ".concat(p.name, " custa ").concat(p.price));
    console.log("Status: ".concat(p.isAvaliable ? 'disponível' : 'indisponível'));
}
var product = {
    name: 'Air Jordan',
    price: 599.99,
    isAvaliable: true
};
showDetails(product);
var userA = {
    name: 'Lucas',
    role: 'Admin'
};
var userB = {
    name: 'Ronaldo'
};
function checkUser(user) {
    console.log("Usu\u00E1rio: ".concat(user.name));
    if (user.role)
        console.log("Tipo: ".concat(user.role));
}
checkUser(userA);
checkUser(userB);
var car = {
    name: 'Ferrari',
    wheels: 4
};
console.log(car);
var coords = {
    x: 20
};
coords.y = 15;
coords.z = 76;
console.log(coords);
var shA = {
    name: 'Eren',
    age: 16,
    superPowers: [
        'Attack on Titan'
    ]
};
console.log(shA);
var Arnold = {
    name: 'Arnold Schwarzenegger',
    type: 'Shotgun',
    caliber: 12
};
console.log(Arnold);
//7 Readonly Arrays
var myArray = [1, 2, 3];
console.log(myArray);
var tArray = [1, 2];
console.log(tArray);
function showTupla(t) {
    console.log(t);
}
showTupla(['mamão', 'banana']);
