function drink(name){
    if(!new.target){
        throw new Error("use new keyword");
    }
    this.name=name;
}
let tea=new drink("tea");
let coffee=drink("coffee");
console.log(tea);
console.log(coffee);

