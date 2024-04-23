const cart = ["shoes", "pants", "kuarta"];

// createOrder(cart, function (orderId) {
//   //   processedToPayment(orderId);
//   console.log("orderId: " + orderId);
// });
const promise = createOrder(cart);
// console.log(promise);
promise
  .then((orderId) => console.log("orderId: " + orderId))
  .catch(function (err) {
    console.error(err.message);
  });
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((paymentInfo) => updateWalletBalance(paymentInfo));

// console.log("hello");
// const GITHUB_API = "https://api.github.com/users/hl9242";
// const user = fetch(GITHUB_API);
// console.log(user);
// user.then(function (data) {
//   console.log(data);
// });
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}
function validateCart(cart) {
  return false;
}
