import React from 'react'
import './MainWidget.css'
import LocationPin from '../../assets/icons/ui/locationPin.svg'
import GreenTick from '../../assets/icons/ui/greenTick.svg'
import AmberWarning from '../../assets/icons/ui/amberWarning.svg'
import RedExclamation from '../../assets/icons/ui/redExclamation.svg'
import LargeSun from '../../assets/icons/weather/sunLarge.svg'
import { useState, useEffect } from 'react';

function MainWidget({mainWidgetinfo, previousWeather, futureWeather}) {
  // console.log(mainWidgetinfo + '////////////')
  let temp = ''
  let feelslike = ''
  let humidity = ''
  let low = ''
  let high = ''
  let citydisplay= ''
  // console.log(mainWidgetinfo)
  if (mainWidgetinfo === undefined){
 }
  else{
    // console.log('good' +mainWidgetinfo)
     temp = mainWidgetinfo[0]
     feelslike = mainWidgetinfo[1]
     humidity = mainWidgetinfo[2]
     low = mainWidgetinfo[3]
     high = mainWidgetinfo[4]
     citydisplay= mainWidgetinfo[5]
  }

  let rating = 100;
  let safeOut = []

  if (temp < 0) {rating -= 10}
  if (humidity > 85) {rating -= 10}
  if (previousWeather[4] === "rain") {rating -= 30}
  if (previousWeather[9] === "rain") {rating -= 20}
  if (previousWeather[14] === "rain") {rating -= 10}
  for (let i = 1; i <= 28; i += 3) {
    if (parseInt(futureWeather[i]) >= 85) {rating -= 5}
  }

  if (rating >= 70) {
    safeOut = ["Safe to Climb Today", "safe-status", GreenTick]
  } else if (rating >= 30 && rating < 70) {
    safeOut = ["Take Care Climbing Today", "warning-status", AmberWarning]
  } else if (rating < 30) {
    safeOut = ["Dangerous to Climb Today", "danger-status", RedExclamation]
  }

  console.log(rating)
  console.log("AAAAAAA", previousWeather, futureWeather)
  // let url_backup = ""
  //   const apikey = "6e64a78c03e21e2143da3ea13650b0de"
  //   const locationlat = lonlat[0]
  //   const locationlon = lonlat[1]
  //   const city = lonlat[2]
  //   const [citydisplay, setCity] = useState('London')
    
  //   const [temp, setTemp] = useState('')
  //   const [humidity, setHumidity] = useState('')
  //   const [feelslike, setFeelslike] = useState('')
  //   const [high, setHigh] =useState('')
  //   const [low, setLow] = useState('')
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apikey}`
  //   if (typeof locationlat === "number"){
  //     url_backup = `https://api.openweathermap.org/data/2.5/weather?lat=${locationlat}&lon=${locationlon}&units=Metric&appid=${apikey}`

  //   }
  //   else{
  //       url_backup = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${apikey}`
  //   }
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       let result = await fetch(url)
      //   let badstatus = false
      //        if ((result.status === 404) || (result.status === 400)){
      //           badstatus = true
      //           result = await fetch(url_backup)
      //           // setCity('London')
      //       }
      //       result.json().then(json => {
      //           setTemp(Math.floor(json.main.temp))
      //           setFeelslike(Math.floor(json.main.feels_like))
      //           setHumidity(Math.floor(json.main.humidity))
      //           setLow(Math.floor(json.main.temp_min))
      //           setHigh(Math.floor(json.main.temp_max))
      //           if(badstatus === false){
      //             setCity(city)
      //           }
      //           else{
      //             setCity('London')
      //           }
      //       })  


        
      //   }

      // fetchData();
  //   })

  // const [Location, SetLocation] = useState("London")
  return (
    <div className='wrapper'>
        <div className='widget-header'>
            <div className='location'>
              <img src={LocationPin} alt="location pin icon" />
              <p>{citydisplay}</p>
            </div>
            <div className={safeOut[1]}>
              <img src={safeOut[2]} alt="safe to climb tick" />
              <p>{safeOut[0]}</p>
            </div>
        </div>

        <div className='widget-body'>
            <div className='temperature'>
              <p>{temp}</p>
              <p className='degree-sign'>o</p>
            </div>
            <img src={LargeSun} alt="main sun icon" />
        </div>

        <div className='widget-footer'>
            <div className='temp-high-low'>
              <p>High: {high}°C | Low: {low}°C</p>
            </div>
            <div className='vertical-separator'>|</div>
            <div className='humidity'>
              <p>Humidity: {humidity}%</p>
            </div>
            <div className='vertical-separator'>|</div>
            <div className='feels-like'>
              <p>Feels Like: {feelslike}°C</p>
            </div>
        </div>
    </div>
  )
}

export default MainWidget;