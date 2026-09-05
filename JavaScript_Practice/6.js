let numbers = [6, -3, 12, 19, -8, 25, 14, -5];
function getNegativeOddNumbers(numbers){
    let newarr = []
    for (let i = 0; i<numbers.length; i ++){
        if(numbers[i]< 0 && numbers[i]%2 !==0){
            newarr.push(numbers[i])
        }
    }
    return newarr;
}
console.log(getNegativeOddNumbers(numbers))