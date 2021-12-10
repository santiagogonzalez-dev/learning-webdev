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
    Keywords to define variables, var, let and const
    var and let allows to define mutable variables, const only works for constant
    variables
    var variables can have their values redefined/overwritten multiple times if we use the
    keyword in front, while with let, you can't do that. Another fact about var is that it
    creates the variable even if it's declared after is used, it will be just Undefined
    until it gets to the point where it's actually created
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
