let orders = [
  { customer: "Aman", amount: 1200, status: "delivered" },
  { customer: "Riya", amount: 800, status: "pending" },
  { customer: "Karan", amount: 2500, status: "delivered" },
  { customer: "Neha", amount: 1500, status: "cancelled" },
  { customer: "Vikas", amount: 3000, status: "delivered" }
];
function getCancelledCustomerNames(orders){
    let newarr = [];
    for ( let i =0; i < orders.length; i++){
        if ( orders[i].status === "cancelled"){
            newarr.push(orders[i].customer)
        }
    }
    return newarr
}
console.log(getCancelledCustomerNames(orders))