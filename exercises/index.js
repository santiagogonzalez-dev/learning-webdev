console.log('Hola Mundo!');
/*
    Type of data
    String: 'hello' "world"
    Boolean: true false
    Null, is a value, it doesn't contain any data, but it's defined
    Number: Well, numbers: 1, 23, 45
    Undefined: is a variable that has not being defined
    Objects: An object
*/
/*
    Keywords to define variables, var, let and const var and let allows to define mutable
    variables, const only works for constant variables var variables can have their values
    redefined/overwritten multiple times if we use the keyword in front, while with let,
    you can't do that. Another fact about var is that it creates the variable even if it's
    declared after is used, it will be just Undefined until it gets to the point where
    it's actually created
*/
if (true) {
    var varVariable = 'This is true';
    var varVariable = 'This is false'; // You can redefine a var variable
    var letVariable = 'This is true';
    // let letVariable = 'This is false' // You can't redefine a let variable
    // Const variables prevent you from changing the values of a const var after you
    // declared it, what you can change is the properties of for example of an object
    var constVariable = 'This is true';
    console.log(varVariable, letVariable, constVariable);
}
// var myVar = 'lala' // The interpreter will put this type of vars on the top, should not use
var myVar = 'My first variable';
console.log(myVar);
myVar = 'Changing the value of a variable is called mutability';
console.log(myVar);
// Boolean
var myBoolean = true;
var myOtherBoolean = false;
var myNum0 = 0;
var myNum1 = 12;
var myNum2 = -23;
console.log(myNum0, myNum1, myNum2, myBoolean, myOtherBoolean, myVar);
// Undefined
// let undef;
// console.log(undef);
// Null
var nulo = null;
console.log(nulo);
// Objects
var myFirstObject = {};
// Object
var myObj = {
    aNumber: 12,
    aString: 'Esta cadena pertenece al object myObj',
    aCondition: true
};
console.log(myObj);
console.log(myObj.aNumber);
// Array
var anEmpytArray = [];
var anArray = ["chanchito", 1, 3, myObj];
// console.log(anEmptyArray);
// console.log(anArray);
anArray.push(5);
console.log(anArray, anEmpytArray);
// Basic math
var suma = 1 + 2;
var resta = 1 - 2;
var multiplicar = 2 * 3;
var division = 9 / 3;
var modulo = 10 % 3;
console.log(suma, resta, multiplicar, division, modulo);
// Increment and decrement
var increment_decrement = 5;
increment_decrement++;
increment_decrement--;
increment_decrement += 3;
increment_decrement -= 3;
increment_decrement *= 5;
increment_decrement /= 10;
console.log(increment_decrement);
console.log("".concat(increment_decrement));
// or ||
// and &&
// not !
// Functions
// arg1 is a parameter
function iterar(arg1) {
    for (var i = 0; i < arg1.length; i++) {
        console.log("".concat(arg1[i]));
    }
}
var numeros = [1, 2, 'Hola', 4, 5];
var nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito Feliz'];
iterar(numeros); // numeros is an argument
iterar(nombres);
function sumados(a, b) {
    return a + b;
}
var resultadoSumaDos = sumados(1, 2);
console.log('resultado', resultadoSumaDos);
// Callbacks
function callbacksumar(a, b, cb) {
    var r = a + b;
    cb(r);
}
// Function declaration
function callback(result) {
    console.log('resultado', result);
}
callbacksumar(2, 3, callback);
// Function expression
var speak = function () {
    console.log('Good day!');
}; // We should put a ; at the end of code block, when we use a function expression
speak();
/* Hoisting in JavaScript: it's the same that happens with var, when we do a function
 * declaration the function moves to the top and is read first, on the other hand if we do
 * a function expression it will not be available till it reaches that part of the code
 * where the function was assigned to a variable */
// // Regular function
// const calcArea = function(radius: number) {
//     let area = 3.14 * radius**2;
//     return(area)
// }
// const area = calcArea(5);
// console.log(area);
// Arrow function
var calcArea = function (radius) { return 3.14 * Math.pow(radius, 2); };
var area = calcArea(5);
console.log(area);
