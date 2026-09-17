let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 92, 88] }
];

function getStudentsWithPerfectSubject(students) {

let newarr = []
for ( let i = 0; i< students.length; i++){
    let found  = false;
    for ( let j = 0; j< students[i].marks.length; j++){
        if(students[i].marks[j]===90){
            found = true;
        }
    }
    if(found){
        newarr.push(students[i].name)
    }
}
return newarr
}

console.log(getStudentsWithPerfectSubject(students));