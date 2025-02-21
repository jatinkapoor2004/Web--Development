//clouser the function inside function which store the value of the variable defined in outer function and can manipulate that value even if the execution of outer function ends

function outer(){
    let count=4;
    function inner(){
        count++;
        return count;
    }
    return inner;
}
let counter=outer();//this create count=4 and ends after making counter as inner now
console.log(outer());//this is a inner function

console.log(counter());//increment the count and print 
console.log(counter());//same



