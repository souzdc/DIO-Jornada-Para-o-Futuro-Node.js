
type Item = {
    name: string;
    price: number;
    quantity: number;
}

async function createItem(item: Item) {

    return {...item, subtotal: () => item.price * item.quantity}
}

export default createItem;