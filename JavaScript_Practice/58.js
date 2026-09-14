let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 92, 88] }
];
 function getStudentAverages(students) {
    let newarr = [];

    for (let i = 0; i < students.length; i++) {

        let sum = 0;
        let count = 0;

        for (let j = 0; j < students[i].marks.length; j++) {

            sum = sum + students[i].marks[j];
            count++;

        }

        let average = sum / count;

        newarr.push({
            name: students[i].name,
            average: average
        });
    }

    return newarr;
}

console.log(getStudentAverages(students));