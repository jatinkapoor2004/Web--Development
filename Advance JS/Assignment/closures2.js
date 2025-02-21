
function rateLimiter(fn,limit){
    lastCalled=0;
    return function(){
        let now=Date.now();

        if(now-lastCalled<limit){
            return "function called to soon";
        }
        lastCalled=now;
        return fn();
    };
}
function test(){
    return "hello world!"
}
let createlimiter=rateLimiter(test,3000);
console.log(createlimiter());
console.log(createlimiter());
setTimeout(() => {
    console.log(createlimiter());
}, 2985);