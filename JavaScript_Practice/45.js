let products = [
    { name: "Laptop", price: 60000, stock: 5 },
    { name: "Mouse", price: 1200, stock: 20 },
    { name: "Keyboard", price: 2500, stock: 0 },
    { name: "Monitor", price: 18000, stock: 8 },
    { name: "Headphones", price: 3500, stock: 0 }
];
function getCheapestOutOfStockProduct(products){
    let lowest = null 
    let lname = null 
    for ( let i = 0; i < products.length; i++){
        if ( products[i].stock === 0 && (lowest === null || products[i].price < lowest)){
            lowest = products[i].price 
            lname = products[i].name 
        }
    }
    return lname 
}
console.log(getCheapestOutOfStockProduct(products))