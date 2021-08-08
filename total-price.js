const products = [
    { name: 'laptop', price: 55000 },
    { name: 'phone', price: 35000 },
    { name: 'cloths', price: 15000 },
    { name: 'watch', price: 5000 },
]

let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice);