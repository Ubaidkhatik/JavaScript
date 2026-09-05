let numbers = [5, 12, -7, 20, 9, -4, 15, 8];
function getEvenPositiveNumbers(numbers){
    let newarr=[];
    for(let i =0; i<numbers.length; i++){
        if(numbers[i]>0 && numbers[i]%2 ===0 && numbers[i]>10){
            newarr.push(numbers[i])
        }
    }
    return newarr;
}
console.log(getEvenPositiveNumbers(numbers))