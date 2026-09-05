let numbers = [5, -8, 12, 17, -4, 20, 9, -15, 24];
function sumPositiveEvenAbove10(numbers){
    let sum = 0;
    for ( let i = 0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0 && numbers[i] > 10){
            sum = sum + numbers[i]
        }
    }
    return sum;
}
console.log(sumPositiveEvenAbove10(numbers))