class Wwe{
    constructor(name){
        this.name=name;
        console.log("Name of the wrestler has been created");
    }
    signature_move(){
        console.log("chock slam")
    }
    finisher_move(){
        console.log("tombstone piledriver")
    }
}
class Wwe2k24 extends Wwe{
    constructor(name){
        super(name);
        console.log("This is era of our trible chief")
    }
    signature_move(){
        console.log("Superman punch")
    }
    finisher_move(){
        console.log("spear")
    }

}
let r=new   Wwe2k24("Roman reigns")
console.log(r)
let u=new Wwe("Undertaker")
console.log(u)
