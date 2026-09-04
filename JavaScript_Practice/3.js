let numbers = [5, 12, 17, 20, 9, 24, 31, 16];
function countOddBelow20(numbers){
    let count =0; 
    for(let i =0; i<numbers.length; i++){
        if(numbers[i]<20 && numbers[i]%2!==0){
            count ++;
        }
    }
    return count;
}
console.log(countOddBelow20(numbers))