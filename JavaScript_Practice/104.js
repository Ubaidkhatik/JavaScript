let prices = [100, 200, 50, 150];
let totalPrice = prices.reduce((total, current) => {
    return total + current;
}, 0);
console.log(totalPrice);    