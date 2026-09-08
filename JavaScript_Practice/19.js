let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 },
    { name: "Vikas", marks: 79 }
];
function getPassedStudents(students){
    let pass = []
    for(let i =0; i<students.length; i++){
        if(students[i].marks>=70){
            pass.push(students[i].name)

        }
    }
    return pass
}
console.log(getPassedStudents(students))