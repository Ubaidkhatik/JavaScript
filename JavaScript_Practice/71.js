let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 92, 88] }
];

function getSubjectTotals(students) {
  let newarr = [];

  for (let j = 0; j < students[0].marks.length; j++) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
      sum = sum + students[i].marks[j];
    }

    newarr.push(sum);
  }

  return newarr;
}

console.log(getSubjectTotals(students));
