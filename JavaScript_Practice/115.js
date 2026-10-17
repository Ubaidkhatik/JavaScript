const users = [
    { id: 101, name: "Aman" },
    { id: 102, name: "Riya" },
    { id: 103, name: "Kabir" }
];

let index = users.findIndex((user) => {
    return user.name === "Riya";
});

console.log(index);