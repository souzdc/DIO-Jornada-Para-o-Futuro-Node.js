import createItem from "./services/itens";

const cart = [];

console.log("Welcome to the your Shoppe Cart");

const item1 = createItem("hotwheels ferrari", 20.99, 1);
const item2 = createItem("hotwheels lamborghini", 39.99, 3);

console.log(item2.subtotal())
