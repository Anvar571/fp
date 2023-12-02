
type List<A> = Nil | Cons<A>;

interface Nil {
  _tag: 'Nill'
}

interface Cons<A> {
  _tag: 'Cons',
  first: A,
  all: List<A>;
}

type Lists = <A>(list: List<A>) => string;

const nil: List<never> = { _tag: 'Nill' };
const cons = <A>(first: A, all: List<A>): List<A> => ({
  _tag: 'Cons',
  first,
  all
});

const isNil = <A>(d: List<A>): d is Nil => d._tag === 'Nill';

const linkedList = cons(12, nil);

const showLists: Lists = (list) => isNil(list) ? '' : `${list.first}` + (isNil(list.all) ? '' : showLists(list.all));

console.log(showLists(linkedList));

// console.log(linkedList);
