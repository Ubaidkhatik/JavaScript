let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 92, 88] }
];
function lowestStudent(students){
    let lowest = null ;
    let hname = null;
    for( let i =0; i< students.length; i++){
        let sum =0;
        for ( let j=0; j<students[i].marks.length; j++){
            sum = sum+students[i].marks[j]
        }
        if(lowest === null || sum < lowest){
            lowest = sum
            hname = students[i].name;
        }
    }
    return hname
}
console.log(lowestStudent(students))