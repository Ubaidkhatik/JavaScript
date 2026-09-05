let numbers = [3, 12, -7, 18, 25, -4, 9, 30, -11];
function getNegativeNumbersBelow10(numbers){
    let newarr= [];
    for( let i = 0; i < numbers.length; i++){
        if(numbers[i]< 0 && numbers[i]< -5){
            newarr.push(numbers[i])
        }
    }
    return newarr;
}
console.log(getNegativeNumbersBelow10(numbers))