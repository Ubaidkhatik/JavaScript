let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 },
    { name: "Vikas", marks: 79 }
];
function getPassedMarksSum(students){
    let sum = 0; 
    for ( let i =0; i<students.length; i++){
        if(students[i].marks >= 70){
            sum = sum+students[i].marks
        }
    }
    return sum
}
console.log(getPassedMarksSum(students))