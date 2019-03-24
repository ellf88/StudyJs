let goodsArr = [
    {id: 1, title: "Product1", price: 80000},
    {id: 2, title: "Product2", price: 66000},
    {id: 3, title: "Product3", price: 33000},
    {id: 4, title: "Product4", price: 22000},
    {id: 5, title: "Product5", price: 44000},
    {id: 6, title: "Product6", price: 99000},
    {id: 7, title: "Product7", price: 88000},
    {id: 8, title: "Product8", price: 11000},
    {id: 9, title: "Product9", price: 22222},
    {id: 10, title: "Product10", price: 33333},
    {id: 11, title: "Product11", price: 55555},
    {id: 12, title: "Product12", price: 77777},
]

const renderProduct = (product) => {
    return `<div class="good">
                <div class="good-img"></div>
                <p class="description">${product.title}</p>
                <p class="price">${product.price}</p>
                <button class="addToCart">Добавить в корзину</button>
            </div>`
}

let renderGoods = item => {
    const itemHtml = item.map(renderProduct).join(" ");
    document.querySelector(".container").insertAdjacentHTML("beforeend", itemHtml);
}

renderGoods(goodsArr);