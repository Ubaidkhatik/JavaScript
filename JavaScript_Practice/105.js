let numbers = [10, 25, 30, 15, 40, 20];
let result = numbers.reduce((total, current)=>{
   if(current>20){
    return total+1
   }
   else if(current<=20){
    return total+0
   }
},0)
console.log(result)