import createItem, { Item } from "./services/itens";
import * as cartService from './services/cart'

const myCart: Item[] = [];
const myWhishList: Item[] = []

console.log("Welcome to the your Shoppe Cart");

const item1 = createItem("hotwheels ferrari", 20.99, 1);
const item2 = createItem("hotwheels lamborghini", 39.99, 3);

cartService.addItem(myCart, item1);
cartService.addItem(myWhishList, item2);
cartService.addItem(myCart, item2);


cartService.displayCart(myCart);