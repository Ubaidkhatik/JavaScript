const users = [
    { id: 1, name: "Aman", age: 17 },
    { id: 2, name: "Riya", age: 22 },
    { id: 3, name: "Kabir", age: 19 }
];
let newuser=users.find((user)=>{
return user.age>=18
})
console.log(newuser)