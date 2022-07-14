window.addEventListener('load', () => {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            //console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
                //ubicación actual    
                //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AQUI_VIENE_TU_API_KEY}`

            //ubicación por ciudad
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Santiago&lang=es&units=metric&appid=6e8cd9dd5230e79c5447dbf49d06a20f`

            //console.log(url)

            fetch(url)
                .then(response => { return response.json() })
                .then(data => {
                    //console.log(data)

                    let temp = Math.round(data.main.temp)
                        //console.log(temp)
                    temperaturaValor.textContent = `${temp} ° C`

                    //console.log(data.weather[0].description)
                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()
                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    //para iconos estáticos
                    //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                    //icono.src = urlIcon
                    //console.log(data.weather[0].icon)

                    //para iconos dinámicos
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.url = 'clima/animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.url = 'clima/animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado.url = 'clima/animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.url = 'clima/animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;
                        case 'Clear':
                            iconoAnimado.url = 'clima/animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.url = 'clima/animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            iconoAnimado.url = 'clima/animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado.url = 'clima/animated/cloudy-day-1.svg'
                            console.log('por defecto');
                    }

                })
                .catch(error => {
                    console.log(error)
                })
        })

    }
})