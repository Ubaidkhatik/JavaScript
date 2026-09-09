let products = [
    { name: "Laptop", price: 60000, stock: 5 },
    { name: "Mouse", price: 1200, stock: 20 },
    { name: "Keyboard", price: 2500, stock: 0 },
    { name: "Monitor", price: 18000, stock: 8 },
    { name: "Headphones", price: 3500, stock: 0 }
];
function getLowStockProducts(products){
    let newarr = []
    for(let i = 0; i < products.length; i++){
        if(products[i].stock > 0 && products[i].stock < 10 ){
            newarr.push(products[i].name)
        }
    }
    return newarr
}
console.log(getLowStockProducts(products))