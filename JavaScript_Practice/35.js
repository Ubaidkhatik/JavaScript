let products = [
    { name: "Laptop", price: 60000, stock: 5 },
    { name: "Mouse", price: 1200, stock: 20 },
    { name: "Keyboard", price: 2500, stock: 0 },
    { name: "Monitor", price: 18000, stock: 8 },
    { name: "Headphones", price: 3500, stock: 0 }
];
function getLowStockValue(products){
    let sum = 0;
   for ( let i =0; i < products.length; i++){
    if( products[i].stock > 0 && products[i].stock < 10 ){
        let mul = products[i].price * products[i].stock
        sum = sum + mul
    }
   }
   return sum 
}
console.log(getLowStockValue(products))