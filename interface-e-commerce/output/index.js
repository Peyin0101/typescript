"use strict";
class Electronics {
    constructor(id, name, price, description, discountPercentage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
    }
}
class Clothing {
    constructor(id, name, price, description, discountPercentage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
    }
}
class Books {
    constructor(id, name, price, description, discountPercentage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.discountPercentage = discountPercentage;
    }
}
const electronics = new Electronics(1, "Smartphone", 699.99, "Latest smartphone with high-resolution camera", 10);
const electronics2 = new Electronics(2, "Laptop", 1099.99, "Powerful laptop for work and gaming");
const clothing = new Clothing(3, "T-shirt", 19.99, "Comfortable cotton T-shirt");
const clothing2 = new Clothing(4, "Jeans", 49.99, "Classic denim jeans", 20);
const book = new Books(5, "JavaScript Basics", 29.99, "Introduction to JavaScript programming", 15);
const book2 = new Books(6, "The Great Gatsby", 9.99, "Classic novel bij F. Scott Fitzgerald");
function displayProductInfo(product) {
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Description: ${product.description}`);
    if (product.discountPercentage !== undefined) {
        const discountedPrice = product.price * (1 - product.discountPercentage / 100);
        console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
    }
    console.log("--------------");
}
displayProductInfo(electronics);
displayProductInfo(electronics2);
displayProductInfo(clothing);
displayProductInfo(clothing2);
displayProductInfo(book);
displayProductInfo(book2);
