function fetchDatawithCallback(callback){
    setTimeout(() => {
        const data = 'Fetched data';
        callback(data);
      }, 2000);
}
fetchDatawithCallback(function(data) {
    console.log(data); // Output after 2 seconds: "Fetched data"
});
