"use strict";
exports.__esModule = true;
var isDone = false;
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
var name = 'bob';
// let list: number[] = [1, 2, 3];
var list = [1, 2, 3];
var x;
x = ['hello', 10];
x[3] = 'world';
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
var c = Color.Green;
console.log(colorName);
function warnUser() {
    console.log('This my warning message');
}
function error(message) {
    throw new Error();
}
function fail() {
    return error('something failed');
}
create({ prop: 0 });
var someValue = 'this is a string';
// let strLength: number = (<string>someValue).length;
var strLength = someValue.length;
