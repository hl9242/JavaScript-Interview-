const students = ["Harish", "Lily", "Pooja", "Aai"];

function print(n) {
  console.log(n);
}

// students.forEach(print)
students.forEach((val, index) => console.log(val + " " + index));

students.map((val) => console.log(val));

const number = [1, 2, 3, 4, 5, 6, 7];
function double(n) {
  return n * 2;
}
// let newArr = number.map(double);
// console.log(newArr);

//find in Array

const number1 = [1, 2, 3, 4, 5, 6, 7];

let ans = number1.findIndex((num) => num === 4);
console.log(number1[ans]);

// const newArray = number1.filter((num) => num % 2 == 0);
// console.log(newArray);

let newarr = number.slice(1, 5);
console.log(newarr);
