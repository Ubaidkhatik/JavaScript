let prices = [80, 150, 250, 60, 400, 120];
let newarr=prices.filter((price)=>{
    return price>100 
}).map((price)=>{
       return price-20
    })
console.log(newarr)
