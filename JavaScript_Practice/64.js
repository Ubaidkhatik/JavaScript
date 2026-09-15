let students = [
  { name: "Aman", marks: [70, 80, 90] },
  { name: "Riya", marks: [85, 75, 95] },
  { name: "Karan", marks: [60, 65, 70] },
  { name: "Neha", marks: [90, 92, 88] }
];

function getBestAbove80(students) {
  let highest = null;
  let hname = null;

  for (let i = 0; i < students.length; i++) {
    let count = 0;

    for (let j = 0; j < students[i].marks.length; j++) {
      if (students[i].marks[j] > 80) {
        count++;
      }
    }

    if (highest === null || count > highest) {
      highest = count;
      hname = students[i].name;
    }
  }

  return hname;
}

console.log(getBestAbove80(students));