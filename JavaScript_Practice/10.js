let numbers = [4, 15, -8, 21, 10, -3, 28, 7, -12];
function getNumbers(numbers){
let newarr=[];
    for ( let i = 0; i<numbers.length; i++){
      if(numbers[i]%2===0 && numbers[i]>10){
        newarr.push(numbers[i])
      }

    }
    return newarr;
}
console.log(getNumbers(numbers))
