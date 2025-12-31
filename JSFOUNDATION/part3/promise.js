const cart = ["shoes", "pants", "kurta"];

const promise = createOrder();

promise
  .then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successful");
  });
}

function createOrder() {
  const pr = new Promise((resolve, reject) => {
    const orderId = 234243;
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    } else {
      const err = new Error("OrderId is Null");
      reject(err);
    }
  });
  return pr;
}
