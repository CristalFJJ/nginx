// type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

// class UIElement {
//   animate (dx: number, dy: number, easing: Easing) {
//     if (easing === 'ease-in') {
//       // ...
//     } else if (easing === 'ease-out') {
//     } else if (easing === 'ease-in-out') {
//     } else {

//     }
//   }
// }

// let button = new UIElement()
// button.animate(0, 0, 'ease-in')
// button.animate(0, 0, 'uneasy')

function extend<T, U>(first: T, second: U) : T & U {
  let result = {} as T & U;

  for(let id in first) {
    result[id] = first[id] as any;
  }

  for(let id in second) {
    if(!result.hasOwnProperty(id)) {
      result[id] = second[id] as any;
    }
  }
  return result;
}