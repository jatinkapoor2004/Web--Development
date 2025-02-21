class employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    get salary(){
        return "you cann't view salary"
    }
    set salary(value){
        if(value<0){
            console.log("invalid salary");
        }
        else{
            this._salary=value;
        }
    }
}
let emp=new employee("jatin",1000000);
console.log(emp.salary);
