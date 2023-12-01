type Either<L, R> = Left<L> | Right<R>;
type IncrementT = (x: number) => number;

type Compose2 = <A, B, C>(
  f: (x: B) => C,
  g: (x: A) => B
) => (x: A) => C;

interface Right<R> {
  readonly _tag: "Right";
  readonly right: R
}

interface Left<L> {
  readonly _tag: "Left";
  readonly left: L
}

const left = <L, R = never>(a: L): Either<L, R> => ({
  _tag: 'Left',
  left: a
});

const right = <R, L = never>(r: R): Either<L, R> => ({
  _tag: 'Right',
  right: r
})

const isLeft = <L, R>(a: Either<L, R>): a is Left<L> => a._tag === 'Left';

const increment1: IncrementT = (x: number) => x = x + 1;

function divideTwo(x: number): Either<string, number> {
  if (x === 0) {
    return left("This arg is not zero");
  } else if (x % 2 !== 0) {
    return left("This is arg only two ")
  } else {
    return right(2 / x);
  }
};

console.log(divideTwo(8));
console.log(divideTwo(7));
console.log(divideTwo(0));

const compose2: Compose2 = (f, g) => (x) => f(g(x));

const composed1 = compose2((x => isLeft(x) ? x : right(increment1(x.right))), divideTwo);

console.log(composed1(2));
console.log(composed1(5));
console.log(composed1(0));
