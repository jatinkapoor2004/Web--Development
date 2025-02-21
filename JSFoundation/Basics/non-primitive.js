let obj={};
console.log(obj);
console.log(typeof obj);

let username={
                firstname:"jatin",
                lastname:"kapoor"
            };
            console.log(username);

//we can use dot(.) operation to access variable inside objects
console.log(username.firstname);
username.firstname="MR.J"
console.log(username.firstname);

// we can also add new items in object like this
username.newentry="new name is added";
console.log(username);

let today=new Date();
console.log(today.getDate());


