//This tutorial about buisness generator name

    /*let a="Crazy"
    let b="Amazing"
    let c="fire"



    let e="Engine"
    let f="Food "
    let g="Garments"


    let h ="Bro's"
    let i = "Limited"
    let j = "hub"

console.log(a.concat( f,h))
console.log(b.concat(  g,j))
console.log(c.concat( e,i))*/
//Adjectives
let rand=Math.random()
let first, second, third;
if(rand< 0.33){
     first="Crazy"
}
else if(rand <0.33 && rand >=0.66) {
    first= "Amazing"

}
else{
    first = "New"
}
//SHop NAME

if(rand< 0.33){
    second="foods"
}
else if(rand <0.33 && rand >=0.66) {

   second = "bike"

}
else{
   second = "mobile"
}

//lats name
if(rand< 0.33){
    third="stall"
}
else if(rand <0.33 && rand >=0.66) {
    third="Garage"
}
else{
    third="shop"
}
console.log(`${first} ${second} ${third}`)