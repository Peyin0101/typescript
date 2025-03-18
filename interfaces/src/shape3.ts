interface Shape3 {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class Circle implements Shape3 {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const myCircle = new Circle(5); // Een cirkel met straal 5
console.log("Oppervlakte:", myCircle.calculateArea()); // Oppervlakte: 78.53981633974483
console.log("Omtrek:", myCircle.calculatePerimeter()); // Omtrek: 31.41592653589793

class Triangle implements Shape3 {
  constructor(
    private base: number,
    private height: number,
    private side1: number,
    private side2: number,
    private side3: number
  ) {}
  calculateArea(): number {
    return (1 / 2) * this.base * this.height;
  }
  calculatePerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }
}
class Rectangle implements Shape3 {
  constructor(private length: number, private width: number) {}
  calculateArea(): number {
    return this.length * this.width;
  }
  calculatePerimeter(): number {
    return 2 * (this.length + this.width);
  }
}
const myTriangle = new Triangle(4, 5, 3, 4, 5);
console.log("Driehoek - Oppervlakte:", myTriangle.calculateArea());
console.log("Driehoek - Omtrek:", myTriangle.calculatePerimeter());
const myRectangle = new Rectangle(6, 8);
console.log("Rechthoek - Oppervlakte:", myRectangle.calculateArea());
console.log("Rechthoek - Omtrek:", myRectangle.calculatePerimeter());
