let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 },
    { name: "Vikas", marks: 79 }
];
function getHighestMarks(students){
    let highest = students[0].marks
    for(let i =0; i<students.length; i++){
        if(students[i].marks > highest){
            highest=students[i].marks
        }
    }
    return highest
}
console.log(getHighestMarks(students))