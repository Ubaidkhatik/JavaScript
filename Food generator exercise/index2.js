
let rand = Math.random()
let first,second,third;
 if(rand<0.33){
    first="Khan"
 }
 else if(rand<0.33 && rand>=0.66){
    first="Hindustan"
 }
 else{
    first="New"
 }
  
 if(rand<0.33){
    second="Chicken"
 }
 else if(rand<0.33 && rand>=0.66){
    second="Mutton"
 }
 else{
    second="Men's"
 }
 if(rand<0.33){
    third="Center"
 }
 else if(rand<0.33 && rand>=0.66){
    third="shop"
 }
 else{
    third="wear"
 }
 console.log(`${first} ${second} ${third}`)