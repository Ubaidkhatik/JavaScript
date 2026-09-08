let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 }
];
function getTopStudent(students){
    let tops = students[0].name
    let mrks= students[0].marks
    for(let i =0; i<students.length; i++){
        if( students[i].marks > mrks){
          
            mrks=students[i].marks
            tops = students[i].name
        }
    }
    return tops
}
console.log(getTopStudent(students))