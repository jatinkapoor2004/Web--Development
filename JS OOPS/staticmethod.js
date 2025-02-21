class calc{
    static add(a,b){
        return a+b;
    }
}
let mincal=new calc();
// console.log(mincal.add(5+2));//using object cann't call
console.log(calc.add(5,2));//using class itself can call

