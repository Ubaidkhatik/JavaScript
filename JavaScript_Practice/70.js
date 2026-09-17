let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 92, 88] }
];

function getTotalAboveAverage(students) {
  let total = 0;

  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    let count = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
      sum = sum + students[i].marks[j];
      count++;
    }

    let average = sum / count;

    if (average > 80) {
      total = total + sum;
    }
  }

  return total;
}

console.log(getTotalAboveAverage(students));