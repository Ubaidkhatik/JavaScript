let numbers = [8, 15, 22, 31, 40, 17, 6, 25];
function countOddAbove20(numbers){
    let count = 0; 
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 20 && numbers[i]%2 !== 0){
            count++;
        }
    }
    return count; 
}
console.log(countOddAbove20(numbers))