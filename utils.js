const url ="https://raw.githubusercontent.com/mkatay/json_products/refs/heads/main/products";

function calculateTotal(cart) {

    let total = 0
    cart.forEach(item => {
        total += item.price * item.quantity
    });

    const mostExpensive = calculateDiscount(cart);
    const discountedPrice = mostExpensive.price * mostExpensive.quantity

    return total - discountedPrice + (discountedPrice * 0.9)
}

function calculateDiscount(cart) {

    const highestPrice = cart.reduce((acc, obj) => Math.max(acc, obj.price), 0); 
    const mostExpensive = cart.filter(obj => obj.price == highestPrice).reduce((acc, obj) => obj.quantity > acc.quantity ? obj : acc);

    return mostExpensive
}

const getData = async (url, renderFc) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderFc(data);    
    } catch (error) {   
        console.error(error);
    }
};
 