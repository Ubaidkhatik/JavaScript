let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];
function getStudentsWithTwoHighMarks(students){
    let newarr = []
    for ( let i = 0; i <students.length; i++){
        let count = 0;
        for ( let j =0; j<students[i].marks.length; j++){
            if(students[i].marks[j]>=80){
 count++
             }
        }
        if(count>=2){
          newarr.push(students[i].name)
        }
        
        
    }
    
    return newarr

}
console.log(getStudentsWithTwoHighMarks(students))