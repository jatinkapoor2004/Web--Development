function animal(){}
animal.prototype.makeSound = function() { 
     // Define in prototype
     return "Animal makes sound";
    }

function dog(){}
//Object.setPrototypeOf(dog,animal);  this is wrong
dog.prototype = Object.create(animal.prototype);  // Inherit from Animal
dog.prototype.bark=function(){
    return "Woof!!"
}

let myDog = new dog();  // Create instance of Dog

console.log(myDog.makeSound());  // ✅ "Animal makes sound"
console.log(myDog.bark());       // ✅ "Woof!!"


