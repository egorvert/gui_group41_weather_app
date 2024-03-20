import React from 'react'
import './MainWidget.css'
import LocationPin from '../../assets/icons/ui/locationPin.svg'
import GreenTick from '../../assets/icons/ui/greenTick.svg'
import AmberWarning from '../../assets/icons/ui/amberWarning.svg'
import RedExclamation from '../../assets/icons/ui/redExclamation.svg'
import LargeSun from '../../assets/icons/weather/sunLarge.svg'
import { useState, useEffect } from 'react';
import clear from '../../assets/icons/ui/clear.png'
import cloudy from '../../assets/icons/ui/cloudy.png'
import fog from '../../assets/icons/ui/fog.png'
import heavyrain from '../../assets/icons/ui/heavyrain.png'
import lightrain from '../../assets/icons/ui/lightrain.png'
import night from '../../assets/icons/ui/night.png'
import snow from '../../assets/icons/ui/snow.png'
import storm from '../../assets/icons/ui/storm.png'

function MainWidget({mainWidgetinfo, previousWeather, futureWeather}) {
  //sets all the variables using the array passed down from the app
  let temp = ''
  let feelslike = ''
  let humidity = ''
  let low = ''
  let high = ''
  let citydisplay= ''
  let icon = mainWidgetinfo[6]

  temp = mainWidgetinfo[0]
  feelslike = mainWidgetinfo[1]
  humidity = mainWidgetinfo[2]
  low = mainWidgetinfo[3]
  high = mainWidgetinfo[4]
  citydisplay= mainWidgetinfo[5]

  // Safety rating calculations
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

  //sets the image that is displayed to a default 
  const [img, setimg] = useState(clear)
  
  useEffect(()=>{
    //sets the icon to match the code gien to it by the api call
    function set_icons(){
      if ((icon === '0dn')){
        setimg(clear)
      }
      else if((icon === '01n')){
        setimg(night)
      }
      else if((icon === '02d') || (icon === '02n') || (icon === '03d') || (icon === '03n') || (icon === '04d') || (icon === '04n')){
        console.log('heheh')
        setimg(cloudy)
      }
      else if((icon === '09d') || (icon === '09n')){
        setimg(lightrain)
      }
      else if((icon === '10d') || (icon === '10n')){
        setimg(heavyrain)
      }
      else if((icon ==='11d') || (icon ==='11n')){
        setimg(storm)
      }
      else if((icon === '13d') || (icon ==='13n')){
        setimg(snow)
      }
      else if((icon === '50d') || (icon === '50n')){
        setimg(fog)
      }
    }
    set_icons()
  })
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
            <img src={img} alt="main sun icon" className='image_main'/>
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