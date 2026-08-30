/*function getdata(){
    return new Promise((resolve,reject)=>{
        resolve(455);
        setTimeout(()=>{
        },3500)
        })
    }*/

/*async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
let data =await x.json()
console.log(data)
}
getdata()







async function main() {
    console.log("Departed from pachora")
    console.log("Departed from nagradevla")
    let data = await getdata()
    console.log(data)
    console.log("In a loop at kajgaon")
    console.log("Arrived at chalisgaon")
}
main()*/

  function getdata(){
    return new Promise((resolve, reject)=>{
        resolve(455)
        setTimeout(()=>{

        },5000)
    });

 }
 async function main(){
 console.log("The Shield ")
 console.log("The powerhouse")
 console.log("The guy")
 console.log("The big dog")
 let data = await  getdata()
 console.log("Tribal chief")
 console.log("Original tribal cheif")
 }
 main()