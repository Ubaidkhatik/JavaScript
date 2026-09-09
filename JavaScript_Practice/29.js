let products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 1200 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 18000 },
    { name: "Headphones", price: 3500 }
];
function getExpensiveProductsTotal(products){
    let sum = 0 ; 
    for ( let i = 0 ; i < products.length; i++){
        if(products[i].price > 5000){
            sum = sum+products[i].price
        }
    }
    return sum ; 
}
console.log(getExpensiveProductsTotal(products))