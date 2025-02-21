//JavaScript does not use class-based inheritance like Java. Instead, it uses prototype-based inheritance, where objects can inherit properties from other objects.

let genericCar={tyre:4};
let tesla={driver:"AI"};
Object.setPrototypeOf(tesla,genericCar);
console.log(tesla);
console.log(genericCar);

//but there is not inheritance
console.log(tesla.tyre);

//the better way
console.log(Object.getPrototypeOf(tesla));



