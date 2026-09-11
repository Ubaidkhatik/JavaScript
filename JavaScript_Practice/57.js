let orders = [
  { customer: "Aman", amount: 1200, status: "delivered" },
  { customer: "Riya", amount: 800, status: "pending" },
  { customer: "Karan", amount: 2500, status: "delivered" },
  { customer: "Neha", amount: 1500, status: "cancelled" },
  { customer: "Vikas", amount: 3000, status: "delivered" }
];
function getHighestAmountByStatus(orders, status){
    let highest = orders[0].amount 
    let hname = orders[0].customer
    for ( let i = 0; i < orders.length; i++){
if ( orders[i].status === status &&(orders[i].amount > highest)){
    highest = orders[i].amount
    hname = orders[i].customer
}
    }
    return hname 
}
console.log(getHighestAmountByStatus(orders, "delivered"))