
type IncrementT = (arg: number) => number;
type ToString = (arg: number) => string;
type IncrementThenToString = (arg: number) => string;

type Compose = <A, B, C>(
  f: (x: B) => C,
  g: (x: A) => B
) => (x: A) => C;

/**
 * 
 * @param value 
 * @returns 
  function toString(value: number): string {
    return String(value);
  }
 */

const increment: IncrementT = (x: number) => {
  return x = x + 1;
};

const toString: ToString = (v: number) => {
  return `"${v}"`;
}

/**
 * 
 * @param value 
 * @returns 
  function increment(value: number): number {
    return value++
  }
 */


/**
 * function compose(toString: (arg: number) => string, increment: (arg: number) => number): string {
      return toString(increment(12));
    }
 */

// const compose: IncrementThenToString = (val) => {
//   return toString(increment(val))
// }

const compose: Compose = (f, g) => (x) => f(g(x));

const res: IncrementThenToString = compose(toString, increment);

export {
  res as compose,
}