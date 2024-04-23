//Old JavaScript way to do Currying

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(4)(4)(4));

//with new version like ES6 version using arrow function

const sendAutoEmail = (to) => (subject) => (body) =>
  `Sending Email to ${to} with Subject ${subject}: ${body}`;
let step1 = sendAutoEmail("hl9242@gmail.com");
let step2 = step1("Started giving interviews");
console.log(step2("Hi SomeOne, I have started giving interviews "));
