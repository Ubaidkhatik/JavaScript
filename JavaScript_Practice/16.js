let numbers = [12, 7, 25, 18, 31, 4, 16, 9, 22];
function getLargestOdd(numbers){
    let largest = null
    for(let i = 0 ; i < numbers.length; i++){
        if(numbers[i]%2 !== 0){
            if(largest === null || numbers[i] > largest){
                largest= numbers[i]
            }
        }
    }
    return largest
}
console.log(getLargestOdd(numbers))