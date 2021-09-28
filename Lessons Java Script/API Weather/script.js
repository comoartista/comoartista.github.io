fetch('https://api.openweathermap.org/data/2.5/weather?id=2267057&appid=830fd24b6ad9adce8fb1b8b8bf486d17')
    .then(function (resp) {return resp.json()}) //Convert data to json
    .then(function(data) {
        console.log(data)
        document.querySelector('.city-name').textContent = (data.name) 
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;'
        document.querySelector('.weather').textContent = data.weather[0]['description']
    })
    .catch(function () {
        //catch any errors
    })


    
   