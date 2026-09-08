let students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 65 },
    { name: "Neha", marks: 91 },
    { name: "Vikas", marks: 79 }
];
function getTopScorers(students){
    let newarr= [];
    for(let i = 0; i < students.length; i++){
        if(students[i].marks >= 80){
            newarr.push(students[i].name)
        }
    }
    return newarr
}
console.log(getTopScorers(students))