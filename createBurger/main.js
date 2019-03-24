class Param {
    constructor(elem) {
        this.name = elem.value;
        this.price = +elem.dataset["price"];
        this.callories = +elem.dataset["callories"];
    }
}

class Burger {
    constructor(size, filling, additive) {
        this.size = new Param(this._select(size));
        this.filling = new Param(this._select(filling));
        this.additive = this._getAdditive(additive);
    }
    
    _getAdditive(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }
    
    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }
    
    _selectAll(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)]
    }
    
    _caclPrice() {
        let result = this.size.price + this.filling.price;
        this.additive.forEach(el => result += el.price);
        return result;
    }
    
    _calcCallories() {
        let result = this.size.callories + this.filling.callories;
        this.additive.forEach(el => result += el.callories);
        return result;
    }
    
    total() {
        document.querySelector("#price").textContent = this._caclPrice();
        document.querySelector("#callories").textContent = this._calcCallories();
    }
}

document.querySelector(".burger").addEventListener("click", () => {
    let burger = new Burger("size", "filling", "additive");
    return burger.total();
})