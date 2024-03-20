import React from 'react'
import './MainWidget.css'
import LocationPin from '../../assets/icons/ui/locationPin.svg'
import GreenTick from '../../assets/icons/ui/greenTick.svg'
import clear from '../../assets/icons/ui/clear.png'
import cloudy from '../../assets/icons/ui/cloudy.png'
import fog from '../../assets/icons/ui/fog.png'
import heavyrain from '../../assets/icons/ui/heavyrain.png'
import lightrain from '../../assets/icons/ui/lightrain.png'
import night from '../../assets/icons/ui/night.png'
import snow from '../../assets/icons/ui/snow.png'
import storm from '../../assets/icons/ui/storm.png'
import { useState, useEffect } from 'react';

function MainWidget({mainWidgetinfo}) {
  //sets the image that is displayed to a default 
  const [img, setimg] = useState(clear)

  //sets all the variables using the array passed down from the app
    let temp = mainWidgetinfo[0]
    let feelslike = mainWidgetinfo[1]
    let humidity = mainWidgetinfo[2]
    let low = mainWidgetinfo[3]
    let high = mainWidgetinfo[4]
    let citydisplay= mainWidgetinfo[5]
    let icon = mainWidgetinfo[6]

  
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
            <div className='safety-status'>
              <img src={GreenTick} alt="safe to climb tick" />
              <p>Safe To Climb Today</p>
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