let products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 1200 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 18000 },
    { name: "Headphones", price: 3500 }
];
function getExpensiveProducts(products){
    
    let newarr = []
for ( let i =0; i < products.length; i++){
    if(products[i].price > 5000){
        newarr.push(products[i].name)
    }

}
return newarr;

}
console.log(getExpensiveProducts(products))