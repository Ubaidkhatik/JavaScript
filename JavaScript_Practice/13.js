let numbers = [15, 8, 23, 42, 17, 30, 11, 26];

function getLargestEven(numbers) {
    let largest = null;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            if (largest === null || numbers[i] > largest) {
                largest = numbers[i];
            }
        }
    }

    return largest;
}

console.log(getLargestEven(numbers));