let orders = [
  { customer: "Aman", amount: 1200, status: "delivered" },
  { customer: "Riya", amount: 800, status: "pending" },
  { customer: "Karan", amount: 2500, status: "delivered" },
  { customer: "Neha", amount: 1500, status: "cancelled" },
  { customer: "Vikas", amount: 3000, status: "delivered" }
];
function getHighestOrderAmount(orders){
    let highest = orders[0].amount
    for(let i =0; i< orders.length; i++){
        if(orders[i].amount > highest){
            highest = orders[i].amount
        }
    }
    return highest

}
console.log(getHighestOrderAmount(orders))