let a=prompt("Enter the first number")
let b=prompt("Enter the second number")
let sum=parseInt(a)+parseInt(b);
console.log("The sum is ",sum)


if(isNaN(a) ||isNaN(b)){
    throw SyntaxError("ye galat baat hai ")
}
//function main(){
//let x=23;
try{
    console.log("The value of x is ", mul*x);
  //  return true;
}
catch(error){
    console.log("Error aa gaya bhai")
    //return false;


}
finally{
    console.log("This is our finally block and final step of error handling")
}
//}