"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const myCircle = new Circle(5); // Een cirkel met straal 5
console.log("Oppervlakte:", myCircle.calculateArea()); // Oppervlakte: 78.53981633974483
console.log("Omtrek:", myCircle.calculatePerimeter()); // Omtrek: 31.41592653589793
class Triangle {
    constructor(base, height, side1, side2, side3) {
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    calculateArea() {
        return (1 / 2) * this.base * this.height;
    }
    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }
}
const myTriangle = new Triangle(4, 5, 3, 4, 5);
console.log("Driehoek - Oppervlakte:", myTriangle.calculateArea());
console.log("Driehoek - Omtrek:", myTriangle.calculatePerimeter());
const myRectangle = new Rectangle(6, 8);
console.log("Rechthoek - Oppervlakte:", myRectangle.calculateArea());
console.log("Rechthoek - Omtrek:", myRectangle.calculatePerimeter());
