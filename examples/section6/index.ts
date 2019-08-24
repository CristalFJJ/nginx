function identity<T>(arg: T): T {
	return arg
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

// class Beekeeper {
// 	hasMask: boolean;
// }

// class LionKeeper {
// 	nametag: string;
// }

// class Animal {
// 	numLengs: number;
// }

// class Bee extends Animal {
// 	keeper: Beekeeper;
// }

// class Lion extends Animal {
// 	keeper: LionKeeper;
// }

// function createInstance<T extends Animal>(c: new() => T): T {
// 	return new c();
// }

// createInstance(Lion).keeper.nametag;
// createInstance(Bee).keeper.hasMask;

let x = 3;

class Animal {
	numLeas: number
}
class Bee extends Animal {

}

class Lion extends Animal {

}

let zoo = [new Bee(), new Lion()];

function createZoo(): Animal[] {
	return [new Bee(), new Lion()];
}