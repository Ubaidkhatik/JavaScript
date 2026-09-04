let numbers = [3, 18, 7, 24, 11, 30, 5, 16];
function getEvenAbove15(numbers){
    let newarr=[];
    for(let i =0; i<numbers.length; i++){
        if(numbers[i]>15 && numbers[i]%2===0){
            newarr.push(numbers[i])
        }
    }
    return newarr;
}
console.log(getEvenAbove15(numbers))