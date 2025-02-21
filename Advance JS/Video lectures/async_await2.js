
function fetchPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("This is a post !!")
        }, 3000);
    })
}
function fetchComment(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("This is comment !!")
        }, 4000);
    })
}
async function fetchblog(){
    try 
    {
        /*Method 1 to fetch mutliple promise data

        console.log("Fetching blog content please wait...");
        let posts=await fetchPost();
        console.log("Posts fetched successfully --> "+posts);

        let comments=await fetchComment();
        console.log("Comments fetched successfully --> "+comments);
        
        console.log("whole blog fetched successfully !!");*/

        //Method 2 to fetch data from multiple promises using promise all function 

        console.log("Fetching blog content...");
        let[posts,comments]=await Promise.all([fetchPost(),fetchComment()]);
        console.log("Post fetched successfully-->"+posts);
        console.log("comments fetched successfully-->"+comments);
        console.log("blog fetched successfully");
        //this method will give combined result in 4 seconds that is the maximum wala using to fetch the data.
        
        
            
    } catch (error) {
        console.log("Error fetching blog content !!",error);
        
    }
}
fetchblog();