// class Control {
//   private state: any
// }

// interface SelectableControl extends Control {
//   select()
// }

// class Button extends Control implements SelectableControl {
// 	select() {
// 	}
// }

// class TextBox extends Control {
// select() {
//   }
// }

// class ImageC implements SelectableControl{
//   select() {}
// }

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// a = ro as number[] 


// interface ClockInterface {
// 	tick()
// }

// interface ClockConstructor {
// 	new(hour: number, minute: number): ClockInterface
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
// 	return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
// 	constructor(h: number, m: number) {

// 	}

// 	tick() {
// 		console.log('beep beep');
// 	}
// }

// class AnalogClock implements ClockInterface {
// 	constructor(h: number,m: number) {

// 	}

// 	tick() {
// 		console.log('tick toc')
// 	}
// }

// let digital = createClock(DigitalClock, 12, 17);

// let analog = createClock(AnalogClock, 7, 32);


// interface Shape {
// 	color: string;
// }

// interface PenStroke {
// 	penWidth: number
// }

// interface Square extends Shape, PenStroke {
// 	sideLength: number
// }

// let squre = {} as Square;
// squre.color = 'blue';
// squre.sideLength = 10;
// squre.penWidth = 5;

// interface Counter {
// 	(start: number): string,
// 	interval: number,
// 	reset(): void
// }

// function getCounter(): Counter {
// 	let counter = (function(star: number) {

// 	}) as Counter;

// 	counter.interval = 123;

// 	counter.reset = function() {

// 	}

// 	return counter
// }

// let c = getCounter();
// c(10);
// c.reset();

class Control {
	private state: any
}

interface SelectableControl extends Control {
	select()
}

class Button extends Control implements SelectableControl {
	select() {

	}
}

class TextBox extends Control {
	select() {

	}
}

class ImageC implements SelectableControl {

	select() {

	}
}