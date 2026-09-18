let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];
 function getStudentsWithAverageAndHighMarks(students){
    let newarr= [];
  
    for ( let i = 0; i<students.length; i++){
        let sum = 0; 
        let count = 0;
        let highmarks = 0;
        for(let j= 0 ; j<students[i].marks.length; j++){
            sum = sum+students[i].marks[j]
            count++
            if(students[i].marks[j]>=80){
                highmarks++
            }
        }
        let average = sum/count;
            newarr.push({
    name: students[i].name,
    average: average,
    highMarks: highmarks
});
        
    }
    return newarr

}
console.log(getStudentsWithAverageAndHighMarks(students))