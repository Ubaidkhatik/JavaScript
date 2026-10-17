const prices = [250, 40, 120, 500, 75, 10];
let sortedPrice = prices.sort((a,b)=>{
    return  a-b
})
console.log(sortedPrice)