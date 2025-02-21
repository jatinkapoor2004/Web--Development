class vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        console.log("this is a start function");
    }
}
class car extends vehicle{
    drive(){
        return "this is a drive function";
    }
}
let mycar=new car("toyota","corolla");
console.log(mycar.drive());
console.log(mycar.make);
console.log(mycar.model);
mycar.start();
