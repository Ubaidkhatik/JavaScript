let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];
function getTotalHighMarks(students){
    let totalHighMarks = 0;
    for ( let i = 0; i<students.length; i++){
        let count = 0;
        for ( let j = 0; j<students[i].marks.length; j++){
            if (students[i].marks[j] >= 80) {
            totalHighMarks++;
            count++
        }
        }

    }
    return totalHighMarks
}
console.log(getTotalHighMarks(students))