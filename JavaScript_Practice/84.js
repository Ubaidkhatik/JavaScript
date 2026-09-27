let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];
function getStudentsWithMoreHighMarks(students){
    let newarr = []
    for ( let i = 0; i<students.length; i++){
        let highestcount =0;
        let lowestcount = 0;
        for ( let j =0; j<students[i].marks.length; j++){
            if(students[i].marks[j]>=80){
                highestcount++
            }
            else{
                lowestcount++
            }
        }
        if(highestcount>lowestcount){
            newarr.push(students[i].name)
        }
    }
    return newarr
}
console.log(getStudentsWithMoreHighMarks(students))