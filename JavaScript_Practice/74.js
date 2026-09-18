let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];
function getAverageOfPassingStudents(students){
    let totalaverage = 0;
    let passingcount = 0;
    for ( let i = 0; i< students.length; i++){
        let count = 0 ; 
        let sum = 0;
        let passed = true
        for ( let j = 0; j<students[i].marks.length; j++){
             sum = sum+students[i].marks[j]
             count++
            if (students[i].marks[j] < 70) {
    passed = false;
}
           
        }
             let average = sum/count;
        if(passed ){
            passingcount++
             totalaverage= (totalaverage+average)
        }
   
       }
  return totalaverage / passingcount;
}
console.log(getAverageOfPassingStudents(students))