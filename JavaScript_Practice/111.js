
const scores = [45, 67, 82, 39, 91];

let hasFailed = scores.some((score) => {
    return score < 40;
});

console.log(hasFailed); // true

let allPassed = scores.every((score) => {
    return score >= 40;
});

console.log(allPassed); // false
