window.onload = () => {
    const API = "http://localhost:3000/server.json";

    let getRequest = (url) => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4) {
                    resolve(xhr.responseText);
                } else {
                    reject("Error");
                }
            };
            xhr.send();
        })
    };

    class Item {
        constructor(product, img = 'https://www.resursltd.ru/images/cms/thumbs/f010964dc04aea08ebcc6ded3d85364e36d15396/nofoto_120_100_5_100.jpg') {
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
        constructor(container = ".container") {
            this.container = container;
            this.products = [];
            this.goods = [];
        }

        fetchItems(cb) {
           getRequest(`${API}`)
                .then(data => {
                  this.goods = JSON.parse(data);
                });
           cb();
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
                sum += current.price, 0)
        }

    }

    let itemsList = new ItemList();
    itemsList.fetchItems(() => {
        itemsList.render();
    });


   // console.log(itemsList.calcSumm());

}




























