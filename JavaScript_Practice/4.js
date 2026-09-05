let numbers = [4, -7, 12, 15, -2, 20, 9, -10];
function sumEvenNegative(numbers){
    let sum =0;
    for (let  i =0; i< numbers.length; i++){
        if(numbers[i]< 0 && numbers[i]%2 === 0){
            sum = sum+numbers[i]
        }
    }
    return sum;
}
console.log(sumEvenNegative(numbers))