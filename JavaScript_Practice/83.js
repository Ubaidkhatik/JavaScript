let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 88, 92] }
];

function getStudentsWithHighAverageAndPerfectMark(students) {
  let newarr = [];

  for (let i = 0; i < students.length; i++) {
    let count = 0;
    let sum = 0;
    let found = false;

    for (let j = 0; j < students[i].marks.length; j++) {
      sum = sum + students[i].marks[j];
      count++;

      if (students[i].marks[j] === 90) {
        found = true;
      }
    }

    let average = sum / count;

    if (average >= 80 && found) {
      newarr.push(students[i].name);
    }
  }

  return newarr;
}

console.log(getStudentsWithHighAverageAndPerfectMark(students));