let products = [];
let cart = [];

function renderProductTable(data) {
    products = data;
    document.querySelector(".products tbody").innerHTML = products.map(obj => `   
        <tr>
            <td class="hide">
                <figure class="image is-32x32">
                    <img src="${obj.thumbnail}">
                </figure>
            </td>
            <td>${obj.title}</td>
            <td>${obj.price}</td>
            <td>
                <button class="button is-primary is-light" onclick="addToCart(${obj.id})">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </td>
        </tr>
    `).join("");

}

function addToCart(id) {
    const product = products.find(obj => obj.id == id);

    const existingProduct = cart.find(obj => obj.id == id);

    if (existingProduct) existingProduct.quantity++;
    else (cart.push({...product, quantity: 1}));

    renderCart();

    document.querySelector(".total").textContent = `
        Total price: ${Math.round(calculateTotal(cart) * 100) / 100} €
    `;
}

function renderCart() {
    document.querySelector(".cart tbody").innerHTML = cart.map(obj => `
        <tr>
            <td>${obj.title}</td>
            <td>${obj.price}</td>
            <td>${obj.quantity}</td>
        </tr>
    `).join("");
}

getData(url, renderProductTable);