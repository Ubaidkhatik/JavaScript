let users = [
    { name: "Aman", age: 17 },
    { name: "Rohit", age: 22 },
    { name: "Priya", age: 19 },
    { name: "Raj", age: 25 }
];
let adultNames= users.filter((user)=>{
    return user.age>=18
}).map((user)=>{
    return user.name
})
console.log(adultNames)