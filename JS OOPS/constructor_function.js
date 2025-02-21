function car(make,model){
    this.make=make;
    this.model=model;
    this.insidefun=function(){
        return `this is inside function`;
    }
}
let mycar=new car("Toyota","camry");
console.log(mycar);
console.log(mycar.insidefun());

