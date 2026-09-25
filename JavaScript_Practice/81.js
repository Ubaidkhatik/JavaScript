let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];
function getStudentsWithAllHighMarks(students){
  let newarr = []; 
    for ( let i =0; i<students.length; i++){
     let passed = true ;
     for( let j = 0; j<students[i].marks.length; j++){
        if(students[i].marks[j]<70){
            passed = false
        }
     }
     if(passed)
     newarr.push(students[i].name)
    }
    return newarr
}
console.log(getStudentsWithAllHighMarks(students))