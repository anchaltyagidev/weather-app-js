var response = {
    "count": 1,
    "data": [
      {
        "app_temp": 38.6,
        "aqi": 159,
        "city_name": "New Delhi",
        "clouds": 100,
        "country_code": "IN",
        "datetime": "2024-05-12:09",
        "dewpt": 13.4,
        "dhi": 108.26,
        "dni": 859.36,
        "elev_angle": 44.97,
        "ghi": 708.82,
        "gust": null,
        "h_angle": 45,
        "lat": 28.63576,
        "lon": 77.22445,
        "ob_time": "2024-05-12 09:37",
        "pod": "d",
        "precip": 0,
        "pres": 982.6,
        "rh": 22,
        "slp": 1008,
        "snow": 0,
        "solar_rad": 141.8,
        "sources": [
          "VIDP",
          "radar",
          "satellite"
        ],
        "state_code": "07",
        "station": "VIDP",
        "sunrise": "00:01",
        "sunset": "13:33",
        "temp": 39,
        "timezone": "Asia/Kolkata",
        "ts": 1715506661,
        "uv": 1.8276763,
        "vis": 16,
        "weather": {
          "description": "Haze",
          "code": 721,
          "icon": "a03d"
        },
        "wind_cdir": "NW",
        "wind_cdir_full": "northwest",
        "wind_dir": 320,
        "wind_spd": 2.6
      }
    ]
}
  
const form = document.getElementById("formcity")

form.addEventListener('submit', (e) => { 
    console.log(e)
    e.preventDefault();
    const data = response.data[0]

    const showCity = document.getElementById("showcity")
    showCity.innerHTML = data.city_name + ", " + data.country_code
    
    const showDate = document.getElementById("showdate")
    showDate.innerHTML = data.ob_time

    const humidity = document.getElementById("showhumid")
    humidity.innerHTML = data.rh + " %"

    const showtemp = document.getElementById("showtemp")
    showtemp.innerHTML = data.temp

    const showWindSpeed = document.getElementById("showwind")
    showWindSpeed.innerHTML = data.wind_spd


    const weatherImg = document.getElementById("weatherimg")
    let weatherText = ""
    if (data.precip > 0 && data.clouds > 100) {
        img = "rain.png"
        weatherText = "Raining"

    } else if (data.clouds > 50) {
        img = "cloud.png"
        weatherText = "Cloudy"
    } else { 
        img = "sun.png"
        weatherImg = "Clear"
    }

    const weatherT = document.getElementById("weathertext")
    weatherT.innerHTML = weatherText

    weatherImg.src = img
    weatherImg.alt = weatherText
}, false)