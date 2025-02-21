class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {  // ✅ Inherit from Shape
    constructor(width, height, color) {
        super(color);  // ✅ Call parent constructor
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

let obj = new Rectangle(10, 20, "Red");
console.log(obj.getArea());   // ✅ Output: 200
console.log(obj.getColor());  // ✅ Output: Red
