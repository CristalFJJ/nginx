let isDone: boolean = false;
let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;
let name: string = 'bob';
// let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
let x:[string, number];
x = ['hello', 10];
x[3] = 'world';

enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}

let colorName:string = Color[2];
let c:Color = Color.Green;
console.log(colorName);

function warnUser(): void {
    console.log('This my warning message');
}

function error(message: string): never {
    throw new Error();
}

function fail() {
    return error('something failed');
}

declare function create(o: object | null): void;
create({prop: 0});

let someValue: any = 'this is a string';
// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

export {};