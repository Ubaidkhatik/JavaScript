let numbers = [5, 18, 7, 24, 13, 30, 9, 16, 21, 4];
function getOddNumbersBetween10And25(numbers){
        let newarr= []
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i]>10 && numbers[i]<25 && numbers[i] % 2!==0){
                newarr.push(numbers[i])
            }
        }
        return newarr
}
console.log(getOddNumbersBetween10And25(numbers))