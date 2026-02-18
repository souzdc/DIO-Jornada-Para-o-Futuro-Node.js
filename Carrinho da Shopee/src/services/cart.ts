import { Item } from "./itens";

export function addItem(cart: Item[], item: Item) {
    cart.push(item);
}

function deleteItem(cart: Item[], item: Item) {

   const index = cart.findIndex((cartItem) => {cartItem.name === item.name})

   if (index !== -1) {
    cart.slice(index, 1);
   }
}

export function displayCart(userCart: Item[]){
    console.log(`Shopee cart list:`)
    userCart.forEach((item, index) => {
        console.log(`\n${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | subtotal = ${item.subtotal()}`);
    })
}

// async function removeItem(userCart, index) {}

export function calculateTotal(userCart: Item[]): number {
    return userCart.reduce((total, item) => total + item.subtotal(), 0)
}