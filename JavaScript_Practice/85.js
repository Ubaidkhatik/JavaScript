let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];

function getBestStudent(students) {
  let highest = null;
  let hstudent = null;

  for (let i = 0; i < students.length; i++) {
    let count = 0;
    let highCount = 0;
    let sum = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
      sum = sum + students[i].marks[j];
      count++;

      if (students[i].marks[j] >= 80) {
        highCount++;
      }
    }

    let average = sum / count;

    if (average >= 80 && highCount >= 2) {
      if (highest === null || average > highest) {
        highest = average;
        hstudent = students[i];
      }
    }
  }

  return hstudent;
}

console.log(getBestStudent(students));