class vehicle{
    constructor(make,model){
        this.make=make;
        this.model=model;
    }
    start(){
        console.log("this is a start function");
    }
}
let obj=new vehicle("tata","jaguar");
obj.start();