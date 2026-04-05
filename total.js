const products = [

    {name: 'Monitor',price:9000,quantity: 1},
    {name: 'Keyboard',price:3500,quantity: 2},
    {name: 'CPU',price:50000,quantity: 3},
    {name: 'UPS',price:19000,quantity: 4},
    {name: 'Mouse',price:5000,quantity: 5},
]


function getShoppingTotal(products){

    let total = 0;

    for(const product of products){

        const thisProduct = product.price * product.quantity
        total = total + thisProduct;
    }

    return total;
}

const sum = getShoppingTotal(products);

console.log("Total Costing: ",sum);