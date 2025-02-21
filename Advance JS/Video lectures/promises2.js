function fetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => { //simulating API response with timer
            let success=true;
            if(success){
                resolve("Data Fetched");
            }
            else{
                reject("Error Fetched");
            }    
        }, 3000);
        
    });
}
fetch()
    .then(response=>console.log(response))
    .catch(response=>console.log(response));