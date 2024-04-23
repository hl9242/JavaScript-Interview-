// Iterators, Generators, Yield

//Iterators

// for (const val of [1, 2, 3, 4, 5]) {
//   console.log(val);
// }

function makeIterator(start = 0, end = Infinity, step = 1) {
  let nextStart = start;
  let iterationCount = 0;
  return {
    next() {
      let result;
      if (iterationCount < end) {
        result = { value: nextStart, done: false };
        nextStart = nextStart + step;
        iterationCount++;
        return result;
      }
      return { value: nextStart, done: true };
    },
  };
}

// const myIterator = makeIterator(1, 10,1);
// let result = myIterator.next();

// while (!result.done) {
//     console.log(result.value)
//     result = myIterator.next()
// }
function* count(params) {
  yield 2;
  yield 4;
  yield 6;
  yield 8;
  yield 10;
  yield 12;
}
// console.log(count())
// const even = count()
// for (const val of even) {
//     console.log(val)
// }
function* makeMyIteratorNew(start, end, stepSize = 1) {
  for (let i = start; i <= end; i += stepSize) {
    yield i;
  }
}

const one = makeMyIteratorNew(1, 10, 2);
for (const val of one) {
  console.log(val);
}
