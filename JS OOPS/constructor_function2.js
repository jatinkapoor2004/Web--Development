function animal(species){
    this.species=species;
}
animal.prototype.sound=function(){
    return "this is a sound function";
}
let dog=new animal("Dog");
console.log(dog.sound());
