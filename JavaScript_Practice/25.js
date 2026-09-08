let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 },
    { name: "Vikas", marks: 79 }
];
function getHighestPassedStudent(students){

    let highest = students[0].marks
    let highname= students[0].name
    for(let i =0; i<students.length; i++){
        if(students[i].marks>highest && students[i].marks>=70){
            highest= students[i].marks
            highname= students[i].name

        }
    }
return highname
}
console.log(getHighestPassedStudent(students))