//asynchronous means not working linewise but depending on time 

console.log("hello");
function sayhello(){
    console.log("function wala hello");
}

sayhello();
console.log("bye");

setTimeout(() => {//this part will execute after 4 seconds
   sayhello(); 
}, 4000);
