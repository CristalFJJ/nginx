var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
// let output = identity<string>('myString');
// let output = identity('myString');
// function loadingIdentity<T>(arg: T[]): T[] {
// 	console.log(arg.length);
// 	return arg;
// }
// let myIdentity: <T>(arg: T) => T = identity;
// interface GenericIdeentityFn<T> {
// 	<T>(arg: T) :T
// }
// let myIdentity: GenericIdeentityFn<number> = identity;
// class GenericNumber<T> {
// 	zeroValue: T;
// 	add: (x: T, y: T) => T
// } 
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) {
// 	return x + y;
// }
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = ' ';
// stringNumeric.add = function(x, y) {
// 	return x + y
// }
// console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));
// interface Lengthwise {
// 	length: number
// }
// function loggingIdentity<T extends Lengthwise>(arg: T): T{
// 	console.log(arg.length);
// 	return arg;
// }
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
// 	return obj[key];
// }
// let x = {a: 1, b: 2, c: 3, d: 4};
// getProperty(x, 'a');
// getProperty(x, 'c');
// function create<T>(c: { new(): T }): T{
// 	return new c();
// }
var Beekeeper = /** @class */ (function () {
    function Beekeeper() {
    }
    return Beekeeper;
}());
var LionKeeper = /** @class */ (function () {
    function LionKeeper() {
    }
    return LionKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
