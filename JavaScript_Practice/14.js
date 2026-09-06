let numbers = [12, 5, 27, 8, 19, 34, 3, 21];
function getSmallestOdd(numbers){
    let smallest = null
    for(let i = 0  ; i < numbers.length; i++){
        if(numbers[i] % 2 !==0){
            if(smallest === null || numbers[i] < smallest){
                smallest = numbers[i]
            }
        }
    }
    return smallest
}
console.log(getSmallestOdd(numbers))