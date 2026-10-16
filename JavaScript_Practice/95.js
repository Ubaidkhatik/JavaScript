let numbers = [5, 12, 18, 7, 25, 30];
let newarr=numbers.filter((num)=>{
    return num>10;
})
let new2=newarr.map((num)=>{
return num*2
})
console.log(new2)