let orders = [
  { customer: "Aman", amount: 1200, status: "delivered" },
  { customer: "Riya", amount: 800, status: "pending" },
  { customer: "Karan", amount: 2500, status: "delivered" },
  { customer: "Neha", amount: 1500, status: "cancelled" },
  { customer: "Vikas", amount: 3000, status: "delivered" }
];

function getTotalAmountByStatus(orders, status){

let sum  = 0;
for ( let i =0; i < orders.length; i++){
    if( orders[i].status === status){
        sum = sum + orders[i].amount
    }
}
return sum ;
}
console.log(getTotalAmountByStatus(orders, "delivered"))