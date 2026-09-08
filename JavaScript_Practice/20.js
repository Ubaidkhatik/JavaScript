let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 },
    { name: "Vikas", marks: 79 }
];
function getAverageMarks(students){
let sum = 0;
    for(let i =0; i<students.length; i++ ){
   sum = sum+students[i].marks  
}
let average = sum/students.length;
return average

}
console.log(getAverageMarks(students))