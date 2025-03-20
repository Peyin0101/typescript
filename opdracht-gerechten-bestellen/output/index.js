"use strict";
class MainCourse {
    constructor(name, price, quantityOrdered, discountPercentage, quantityForDiscount) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}
class Dessert {
    constructor(name, price, quantityOrdered, discountPercentage, quantityForDiscount) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}
function calculateTotalPrice(dishes) {
    return dishes.reduce((totalPrice, dish) => {
        let dishPrice = dish.price;
        console.log(`${dish.name} - ${dish.price.toFixed(2)}€`);
        if (dish.discountPercentage &&
            dish.quantityForDiscount &&
            dish.quantityOrdered >= dish.quantityForDiscount) {
            dishPrice = dish.price * (1 - dish.discountPercentage / 100);
            console.log(`Discount of ${dish.discountPercentage}% applied on ${dish.name}`);
        }
        let dishTotal = dishPrice * dish.quantityOrdered;
        console.log(`${dishPrice.toFixed(2)}€ * ${dish.quantityOrdered} ordered = ${dishTotal.toFixed(2)}`);
        console.log("---");
        return totalPrice + dishTotal;
    }, 0);
}
const mainCourse1 = new MainCourse("Steak", 18.99, 4, 10, 3);
const mainCourse2 = new MainCourse("Chicken Curry", 12.99, 1);
const dessert1 = new Dessert("Chocolate Cake", 6.99, 4, 15, 2);
const dessert2 = new Dessert("Banana Milkshake", 4.99, 1);
const dishes = [mainCourse1, mainCourse2, dessert1, dessert2];
const totalPrice = calculateTotalPrice(dishes);
console.log(`Total Price: ${totalPrice.toFixed(2)}€`);
