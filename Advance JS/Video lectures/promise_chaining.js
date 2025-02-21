function fetch(){
    return new Promise((resolve,reject)=>{
        let success=true;
        if(success){
            resolve("Data Fetched");
        }
        else{
            reject("Error Fetched");
        }
    });
}
fetch()
    .then(response=>{
        console.log(response)
        return "this is further response !!"//this is given to next res2
    })
    .then(res2=>console.log(res2))
    .catch(response=>console.log(response));