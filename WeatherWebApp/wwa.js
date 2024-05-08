 
 const weatherForm = document.querySelector('.weatherForm')
 const cityInput = document.querySelector('.cityInput')
 const card = document.getElementById("card")
 const apiKey = "5037d2153918725c8b16fafb9ec0920d";


 weatherForm.addEventListener("submit", async(event)=>{
    event.preventDefault();
    const city = cityInput.value;
    if(city)
    {
        try
        {
          let weatherData = await getWeatherData(city)
          getWeatherInfo(weatherData)
        }
        catch(err)
        {
            console.log(err);
            displayError(err)
        }
    }
    else{
          displayError("Please Enter the City")
    }
 })

 async function getWeatherData(city)
 {
       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
       const response = await fetch(url)

       if(!response.ok)
        {
            throw new Error("City not found")
        }

        return await response.json()

 }

 function getWeatherInfo(data)
 {
      const {name:city,
            main: {humidity,temp},
             weather:[{description,id}] } = data
     
      card.textContent="";
      card.style.display="flex"
      
      const cityDisplay = document.createElement('h1')
      const tempDisplay = document.createElement('p')
      const humidDisplay = document.createElement('p')
      const descDisplay = document.createElement('p')
      const emoji = document.createElement('p')

      cityDisplay.textContent=city;
      cityDisplay.classList.add('city')
      card.append(cityDisplay)
      
      tempDisplay.textContent=`${(temp-273.5).toFixed(1)}°C`;
      tempDisplay.classList.add('temp')
      card.append(tempDisplay)

      humidDisplay.textContent=`humidity: ${humidity}%`;
      humidDisplay.classList.add('humid')
      card.append(humidDisplay)

      descDisplay.textContent=description;
      descDisplay.classList.add('condition')
      card.append(descDisplay)

      emoji.textContent=getWeatherEmoji(id);
      emoji.classList.add('emoji')
      card.append(emoji)
 }

 

 function getWeatherEmoji(id)
 {
      switch(true)
      {
        case id>=200 && id<300:
            return "⛈️";
        
        case id>=300 && id<400:
             return "🌦️";
        
        case id>=500 && id<600:
             return "🌧️";
        
        case id>=600 && id<700:
            return "❄️"
        
        case id>=700 && id<800:
            return  "🌫"
        
        case id === 800:
            return "🌞"
        
         case id>=801 && id<810:
            return "⛅"
        
        default:
            return "🤔💭"
      }
 }

 function displayError(message)
 {
     const errorDisplay = document.createElement("p")
     errorDisplay.textContent = message;
     errorDisplay.classList.add("errorDisplay");

     card.textContent=""
     card.style.display="flex";
     card.appendChild(errorDisplay);
 }