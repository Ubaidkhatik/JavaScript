class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is creted");
    }
eats(){
    console.log("Kha raha hu")
}
run(){
    console.log("daud raha hu  ");
}
}
class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("new object is created")
    }
}
let l =new Lion("Jungle ka raja shera")
console.log(l)
let a =new Animal("Momkey")
console.log(a)
