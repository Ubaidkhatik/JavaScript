let numbers = [3, 18, -5, 22, 7, -12, 30, 11];
function sumNegativeEven(numbers){
    let sum = 0;
    for (let i = 0; i< numbers.length; i++){
        if(numbers[i]<-5 && numbers[i]%2 ===0){
            sum = sum+ numbers[i]

        }
    }
    return sum;
}
console.log(sumNegativeEven(numbers))
