const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Monitor", price: 12000, quantity: 2 }
];
const subtotal = cart.map((ct)=>{
    return ct.price*ct.quantity
})
const filtered = subtotal.filter((subtotal)=>{
    return subtotal >2000
})
let grandtotal = subtotal.reduce((total , amount)=>{
    return total + amount
},0)
console.log(grandtotal)