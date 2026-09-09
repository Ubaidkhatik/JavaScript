let products = [
    { name: "Laptop", price: 60000, stock: 5 },
    { name: "Mouse", price: 1200, stock: 20 },
    { name: "Keyboard", price: 2500, stock: 0 },
    { name: "Monitor", price: 18000, stock: 8 },
    { name: "Headphones", price: 3500, stock: 0 }
];

function getMostValuableProduct(products) {
    let high = products[0].price * products[0].stock;
    let highName = products[0].name;

    for (let i = 0; i < products.length; i++) {
        let value = products[i].price * products[i].stock;

        if (value > high) {
            high = value;
            highName = products[i].name;
        }
    }

    return highName;
}

console.log(getMostValuableProduct(products));