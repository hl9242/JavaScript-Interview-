//IIFE - Immediately Invoked Function Expression

(function add(a, b) {
  console.log(a + b);
})(2, 3);

(() => console.log("I am ES6"))();

const value = (() => 100)();

console.log(value);

//old way
async function getData(params) {
  const data = await fetch("");
}
//New way
const data = (async () => await fetch(""))();

const atm = function (initialBalance) {
  let balance = initialBalance;
  function withdraw(amt) {
    if (amt > balance) {
      return "Are you kidding?";
    } else {
      balance -= amt;
      return balance;
    }
  }
  return { withdraw };
};
const harish = atm(1000);
console.log(harish.withdraw(100));
console.log(harish.withdraw(100));
console.log(harish.withdraw(1000));

