let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 },
    { name: "Vikas", marks: 79 }
];
function countStudentsAbove80(students){
    let count = 0;
    for ( let i =0; i < students.length; i++){
        if(students[i].marks>=80){
            count++
        }
    }
    return count
}
console.log(countStudentsAbove80(students))