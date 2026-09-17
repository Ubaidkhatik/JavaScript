let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 92, 88] }
];

function getHighestInFirstSubject(students) {
  let highest = null;
  let hstudent = null;

  for (let i = 0; i < students.length; i++) {
    let marks = students[i].marks[0];

    if (highest === null || marks > highest) {
      highest = marks;
      hstudent = students[i];
    }
  }

  return hstudent;
}

console.log(getHighestInFirstSubject(students));