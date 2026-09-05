let numbers = [4, 17, -6, 23, 10, -9, 31, 8, -2];
function sumPositiveOdd(numbers){
    let sum = 0; 
    for ( let i = 0; i < numbers.length ; i ++ ){
        if (numbers[i]> 0 && numbers[i]%2 !==0){
            sum = sum + numbers[i]
        }
    }
    return sum;
}
console.log(sumPositiveOdd(numbers))