const numbers = [5, 12, 18, 7, 24, 30, 9];
let result = numbers.filter((num)=>{
    return num>10
}).map((num)=>{
    return num*2
})
console.log(result)