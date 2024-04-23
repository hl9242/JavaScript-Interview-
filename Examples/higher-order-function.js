// High Order Function and Callback
function add(a, b, cb) {
  let result = a + b;
  cb(result);
  return ()=>console.log(result)
}
// function showResult(result){
//     console.log(result)
// }
// add(2, 4, val => console.log(val));
 let returnResultFunction = add(2, 4, () => {});
 returnResultFunction();
