

// API will be taken from the Open Weather App 

let btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
    let city = document.querySelector('.input').value
    if(city !== '')
        {
            
            const apiUrl ='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
            const apiKey = '23d588e731d3d0eabbde57f538dc07a9'
            async function weatherData(city){
            const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
            var data = await response.json()
            console.log(data)
            console.log(data.weather[0].main)
            let img = document.querySelector('.img')
            if(data.weather[0].main=='Clouds')
                {
                   img.src = './images/clouds.png'
                }
                else if(data.weather[0].main=='Clear')
                    {
                        img.src = './images/clear.png'
                    }
                else if(data.weather[0].main=='Drizzle')
                    {
                        img.src = './images/drizzle.png'
                    }
                else if(data.weather[0].main=='Humidity')
                    {
                        img.src = './images/humidity.png'
                    }
                else if(data.weather[0].main=='Mist')
                    {
                        img.src = './images/mist.png'
                    }
                else if(data.weather[0].main=='Rain')
                    {
                        img.src = './images/rain.png'
                    }
                else if(data.weather[0].main=='Search')
                    {
                        img.src = './images/search.png'
                    }
                else if(data.weather[0].main=='Snow')
                    {
                        img.src = './images/snow.png'
                    }
                else if(data.weather[0].main=='Wind')
                    {
                        img.src = './images/wind.png'
                    }
                    else{
                        img.src = './images/mist.png'
                    }
                            
            document.querySelector('.temp').innerText = data.main.temp + "°C"
            document.querySelector('.city').innerText = data.name
            document.querySelector('.humidityPer').innerText = data.main.humidity + '%'
            document.querySelector('.wind').innerText = data.wind.speed +"Km/h"
                 }
         weatherData(city)
        }
    })



