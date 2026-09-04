let count=0;
document.getElementById("Increment").addEventListener("click", function(){
    count++; 
    document.getElementById("count").textContent=count;
})

document.getElementById("Decrement").addEventListener("click", function(){
    count--; 
    document.getElementById("count").textContent=count;
})

document.getElementById("Reset").addEventListener("click", function(){
    count = 0;
    document.getElementById("count").textContent = count;
});

let age;

document.getElementById("AgeCheck").addEventListener("click", function () {

    age = Number(document.getElementById("ageInput").value);

    if (age >= 18) {
        alert("You are an adult.");
    } else {
        alert("You are Minor.");
    }

});

let numbers = [10, 25, 7, 42, 18];
let largest = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i]>largest){
        largest= numbers[i]
    }
}
console.log("The largest number is: " + largest);