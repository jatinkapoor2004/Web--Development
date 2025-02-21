function fetch(){
    return new Promise((resolve,reject)=>{
        let success=false;
        if(success){
            resolve("Data Fetched");
        }
        else{
            reject("Error Fetched");
        }
    });
}
fetch()
    .then(response=>console.log(response))
    .catch(response=>console.log(response));