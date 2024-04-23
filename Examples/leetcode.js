// var filter = function (arr, fn) {
//   var filteredArr = [];
//   const arrr = [0, 10, 20, 30];

//   for (let i = 0; i < arrr.length; i++) {
//     if (greaterThan10(arrr[i])) {
//       filteredArr.push(arrr[i]);
//     }
//   }
//   return filteredArr;
// };
// filter();
// // const array = filter(arr,greaterThan10());
// function greaterThan10(n) {
//   return n > 10;
// }

var compactObject = function (obj) {
  argumentsLength(obj);
};

function argumentsLength(args) {
  console.log(Object.keys(args).length);
  return Object.keys(args).length;
}
compactObject([5]);
