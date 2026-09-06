let numbers = [7, 14, 3, 28, 11, 20, 5, 32, 9];
function countEvenNumbersAbove15(numbers){
    let count = 0;
    for( let i = 0; i<numbers.length; i++){
        if(numbers[i] > 15 && numbers[i] % 2 === 0){
            count++
        }
    }
    return count;
}
console.log(countEvenNumbersAbove15(numbers))