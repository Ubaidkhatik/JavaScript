const cart = [199, 299, 150, 350];
let result= cart.reduce((total, price)=>{
    return total+price
},0)
console.log(result)