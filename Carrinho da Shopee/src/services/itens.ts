


 function createItem(name: string, price: number, quantity: number) {

    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export default createItem;

