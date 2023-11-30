// Functional programming should only be total functions 
// =========================================
// types
type DivideT = (x: number) => number;

type Increment = (x: number) => number;

type Compose = <A, B, C>(
  f: (x: B) => C,
  g: (x: A) => B
)
  => (x: A) => C;

type Option<A> = Some<A> | None

type DivideT2 = (x: number) => Option<number>

interface Some<A> {
  _tag: 'Done'
  value: A
};

interface None {
  _tag: 'None'
};

// ==================================================
// implements
const compose: Compose = (f, g) => (x) => f(g(x));

const increment: Increment = (x: number) => x = x + 1;

const divideF: DivideT = (a: number) => 2 / a;

const some = <A>(x: A): Option<A> => ({ _tag: 'Done', value: x });
const none: Option<never> = { _tag: 'None' };

const isNone = <A>(x: Option<A>): x is None => x._tag === 'None';

const divide2: DivideT2 = (x: number) => x === 0 ? none : some(x);

const composed = compose(
  (x: Option<number>) => isNone(x) ? none : some(increment(x.value)),  divide2);

console.log(composed(8));
console.log(composed(0));

