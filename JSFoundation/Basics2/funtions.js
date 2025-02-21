function makeTea(typeoftea) {
    return "making"+typeoftea;
}
console.log(makeTea("jatin"));

function orderTea(teatype){
    function confirmOrder(teatype2){
        return "order confirmed for "+teatype2;
    }
    return confirmOrder(teatype);
}
console.log(orderTea("kapoor"));

const calculate=(price,quantity)=>{
    return price*quantity;
}
console.log(calculate(12,15));

//-------------------------------------------------
function makeTea(typeoftea){
    return "making "+typeoftea; 
}
function processTeaOrder(fnc){
    return fnc("earl grey");
}
let out=processTeaOrder(makeTea);
console.log(out);

function createTeamaker(){
    return function inside(teatype){
        return "making "+teatype; 
    }    
}
let teamaker=createTeamaker();//teamaker variable is itself a function.
console.log(teamaker("green tea"));


