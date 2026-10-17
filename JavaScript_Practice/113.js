const students = [
    { name: "Aman", marks: 72 },
    { name: "Riya", marks: 91 },
    { name: "Kabir", marks: 65 },
    { name: "Neha", marks: 84 }
];
let sortedMarks = students.sort((a,b)=>{
    return b.marks-a.marks
})
console.log(sortedMarks)