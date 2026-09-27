let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];

function getStudentWithHighestSingleMark(students) {
  let highest = null;
  let hstudent = null;

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students[i].marks.length; j++) {

      if (highest === null || students[i].marks[j] > highest) {
        highest = students[i].marks[j];
        hstudent = students[i];
      }

    }
  }

  return hstudent;
}

console.log(getStudentWithHighestSingleMark(students));