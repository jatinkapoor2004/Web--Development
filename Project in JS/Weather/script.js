document.addEventListener("DOMContentLoaded",()=>{

    const cityInput= document.getElementById("city-input");
    const getWeatherBtn= document.getElementById("get-weather-btn");
    const weatherInfo= document.getElementById("weather-info");
    const cityNameDisplay= document.getElementById("city-name");
    const temperatureDisplay= document.getElementById("temperature");
    const discriptionDisplay= document.getElementById("description");
    const errorMessage= document.getElementById("error-message");
    const API_KEY="7d7234182525f9ab0f8e4476aa14ba4d";

    getWeatherBtn.addEventListener("click",async()=>{
        const city=cityInput.value.trim();
        if(!city) return ;// it means the city field is empty

        // 1.) server may throw error
        // 2.) server is always in another continent

        try {
            const weatherdata=await fetchData(city);
            
            displayData(weatherdata);

        } catch (error) {
            showError();
        }
    })

    async function fetchData(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        const response= await fetch(url);
        console.log(typeof response);
        console.log("resposne is", response);
        if(response.ok==false){
            showError();
            console.log("inside if");
            
            throw new Error("city not found bcoz response not ok")  
        }
        console.log("ouside if");
        
        const data= await response.json();
        return data;
        
    }

    function displayData(data){
        console.log(data);
        const {name,main,weather}=data;
        cityNameDisplay.textContent=name;
        
        //first unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");

        temperatureDisplay.textContent=`Temperature : ${main.temp-273.15}`;
        discriptionDisplay.textContent=`Weather : ${weather[0].description}`;
    }

    function showError(){
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
})