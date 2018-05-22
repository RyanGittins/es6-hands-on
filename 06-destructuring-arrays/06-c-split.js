const invoiceId = "12345-01";

const parts = invoiceId.split("-");

const orderId      = parts[0];
const invoiceIndex = parts[1];

console.log("orderId:", orderId);
console.log("invoiceIndex:", invoiceIndex);
