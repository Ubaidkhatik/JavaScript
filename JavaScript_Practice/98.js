let users = [
    { name: "Aman", age: 17 },
    { name: "Rohit", age: 22 },
    { name: "Priya", age: 19 },
    { name: "Raj", age: 25 }
];
let foundUser = users.find((user)=>{
    return user.age>=20
})
console.log(foundUser)