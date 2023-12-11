
type Curry1 = (x: number) => (b: number) => number;

type Curry2 = (f: (x: number, b: number) => number) => (x: number) => (b: number) => number;

function simple_func(a: number, b: number) {
  return a + b
};

console.log(simple_func(1, 2));

const sum: Curry1 = (x) => (b) => x + b;

const curry2: Curry2 = f => x => b => f(x, b);

const one = sum(1);

const two = curry2(simple_func);

console.log(two(1)(2));


console.log(one(2));
console.log(one(5));

// ================
// example
// const sumCurry = (x: number) => {
//   return 
// };

// const res = sumCurry(12)(3)(2);
