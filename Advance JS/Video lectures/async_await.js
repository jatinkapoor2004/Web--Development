function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"jatin",url:"https://www.google.com"})
        }, 4000);
    })
}
async function getUserData() {
    try {
        console.log("Fetching data...");
        const data=await fetchUserData();
        console.log("Data Fetched Successfully!!");
        console.log("Userdata :",data);
    } catch (error) {
        console.log("error fetching in data",error);
    }
}
getUserData();