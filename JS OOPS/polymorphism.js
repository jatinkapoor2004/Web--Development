class bird{
    fly(){
        return "i am flying";
    }
}
class penguin extends bird{
    fly(){
        return `i am not flying`;
    }
}
let bird1=new bird();
console.log(bird1.fly());

let bird2=new penguin();
console.log(bird2.fly());
