
export type Item = {name: string, price: number, quantity: number, subtotal:() => number};


 function createItem(name: string, price: number, quantity: number): Item {

    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export default createItem;

