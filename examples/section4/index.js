// class Greeter {
// 	greeting: string;
// 	constructor(message: string) {
// 		this.greeting = message;
// 	}
// 	greet() {
// 		return 'Hello, ' + this.greeting
// 	}
// }
// let greeter = new Greeter('world');
// greeter.greet()
// class Animal {
// 	move(distance: number = 0) {
// 		console.log(`Animal moved ${distance}m`)
// 	}
// }
// class Dog extends Animal {
// 	bark() {
// 		console.log('Woof! Woof!')
// 	}
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// class Animal {
// 	name: string;
// 	constructor(name: string) {
// 		this.name  = name;
// 	}
// 	move(distance: number = 0) {
// 		console.log(`${this.name} moved ${distance}m`)
// 	}
// }
// class Snake extends Animal {
// 	constructor (name: string) {
// 		super(name)
// 	}
// 	move (distance:number = 5) {
// 		console.log('Slithering...');
// 		super.move(distance);
// 	}
// }
// class Horse extends Animal {
// 	constructor(name: string) {
// 		super(name)
// 	}
// 	move(distance: number = 45) {
// 		console.log('Galloping...');
// 		super.move(distance);
// 	}
// }
// let sam = new Snake('Sammy');
// let tom: Animal = new Horse('Tommy');
// sam.move();
// tom.move(34);
// class Animal {
// 	public name: string;
// 	public constructor(name: string) {
// 		this.name  = name;
// 	}
// 	public move(distance: number = 0) {
// 		console.log(`${this.name} moved ${distance}m`)
// 	}
// }
// class Rhino extends Animal{
// 	constructor() {
// 		super('Rhino');
// 	}
// }
// class Employee {
// 	private name: string;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }
// let animal = new Animal('Goot');
// let rhino = new Rhino();
// let employee = new Employee('Bob');
// class Person {
// 	private name: string;
// 	protected constructor(name: string) {
// 		this.name = name;
// 	}
// }
// class Employee extends Person {
// 	private department: string;
// 	constructor(name: string, department: string) {
// 		super(name);
// 		console.log(this.name)
// 		this.department = department;
// 	}
// 	getElevatorPitch() {
// 		return `Hello, my name is ${this.name} and I work in ${this.department}.`
// 	}
// }
// let howard = new Employee('Howard', 'Sales');
// let john = new Person('John');
// console.log(howard.getElevatorPitch());
// console.log(howard.name);
// class Person {
// 	readonly name;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }
// let john = new Person('John');
// console.log(john.name);
// john.name = '';
// let passcode = 'secret1 passcode';
// class Employee {
// 	private _fullName: string;
// 	get fullName(): string {
// 		return this._fullName;
// 	}
// 	set fullName(newName: string) {
// 		if(passcode && passcode === 'secret passcode') {
// 			this._fullName = newName;
// 		}else{
// 			console.log('Error: Unauthorized update of employee!');
// 		}
// 	}
// }
// let employee = new Employee();
// employee.fullName = 'Bob Smith';
// if(employee.fullName) {
// 	console.log(employee.fullName);
// }
// class Grid {
// 	static origin = {x: 0, y: 0};
// 	scale: number;
// 	constructor(scale: number) {
// 		this.scale = scale;
// 	}
// 	calculateDistanceFromOrigin(point: {x: number, y: number}) {
// 		let xDist = point.x - Grid.origin.x;
// 		let yDist = point.y - Grid.origin.y;
// 		return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
// 	}
// }
// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);
// console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}));
// console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}));
// abstract class Department {
// 	name: string;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// 	printName(): void {
// 		console.log('Department name' + this.name);
// 	}
// 	abstract printMetting(): void;
// }
// class AccountingDepartment extends Department {
// 	constructor() {
// 		super('Accounting ad Auditing');
// 	}
// 	printMetting(): void {
// 		console.log('The Accounting Department meets each Monday at10am');
// 	}
// 	genterateReports(): void {
// 		console.log('Generating accounting reports...');
// 	}
// }
// let department: Department;
// department = new AccountingDepartment();
// department.printName();
// department.printMetting();
// department.genterateReports()
