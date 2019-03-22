/*let goodsArr = [
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
                <p class="price">$${product.price}</p>
                <button class="addToCart">Добавить в корзину</button>
            </div>`
}

let renderGoods = item => {
    const itemHtml = item.map(renderProduct).join(" ");
    document.querySelector(".container").insertAdjacentHTML("beforeend", itemHtml);
}

renderGoods(goodsArr);*/

class Item {
    constructor (product, img = 'https://www.resursltd.ru/images/cms/thumbs/f010964dc04aea08ebcc6ded3d85364e36d15396/nofoto_120_100_5_100.jpg') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    
    render() {
        return `<div class="good">
                <div class="good-img">
                <img class="img" src="${this.img}" alt="img">
                </div>
                <h3 class="description">${this.title}</h3>
                <h3 class="price">$${this.price}</h3>
                <button class="addToCart">Добавить в корзину</button>
            </div>`
    }
}

class ItemList {
  constructor (container = ".container") {
      this.container = container;
      this.products = []; 
      this._fetchItems();   
  }
    _fetchItems () {
      this.goods = [
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
      ];        
  }
    render() {        
        const block = document.querySelector(this.container);
        for (let item of this.goods) {
            const itemHtml = new Item(item);
            this.products.push(itemHtml);
            block.insertAdjacentHTML("beforeend", itemHtml.render());
        }
 }
    calcSumm() {
        return this.products.reduce((sum, current) =>
            sum += current.price,0)
    }
    
}

let itemsList = new ItemList();
itemsList.render();
console.log(itemsList.calcSumm());




























