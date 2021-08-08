const phones = [
    { name: 'samsung s5', price: 55000, camera: 64, storage: 128 },
    { name: 'Realme 7pro', price: 35000, camera: 64, storage: 128 },
    { name: 'Walton', price: 12000, camera: 64, storage: 128 },
    { name: 'Xiaomi', price: 15000, camera: 64, storage: 128 },
    { name: 'Iphone', price: 155000, camera: 64, storage: 128 }

];
let cheapest = phones[0];
function selectCheapest(phones) {
    for (const phone of phones) {
        // console.log(phone);

        // compare price only 
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const sk = selectCheapest(phones);
console.log(sk);