let numbers = [5, 12, 8, 21, 30, 7, 14];
function sumOddAbove10(numbers)
{
    let sum =0; 
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i]>10 && numbers[i]%2!==0){
            sum = sum+numbers[i]
        }
    }
    return sum;
}
console.log(sumOddAbove10(numbers))