import React from 'react'
import './MainWidget.css'
import LocationPin from '../../assets/icons/ui/locationPin.svg'
import GreenTick from '../../assets/icons/ui/greenTick.svg'
// import LargeSun from '../../assets/icons/weather/sunLarge.svg'
import clear from '../../assets/icons/ui/clear.png'
import cloudy from '../../assets/icons/ui/cloudy.png'
import fog from '../../assets/icons/ui/fog.png'
import heavyrain from '../../assets/icons/ui/heavyrain.png'
import lightrain from '../../assets/icons/ui/lightrain.png'
import night from '../../assets/icons/ui/night.png'
import partcloudy from '../../assets/icons/ui/partcloudy.png'
import snow from '../../assets/icons/ui/snow.png'
import wind from'../../assets/icons/ui/wind.png'
import storm from '../../assets/icons/ui/storm.png'
import { useState, useEffect } from 'react';

function MainWidget({mainWidgetinfo}) {
  // console.log(mainWidgetinfo + '////////////')
  const [img, setimg] = useState(clear)
  let temp = ''
  let feelslike = ''
  let humidity = ''
  let low = ''
  let high = ''
  let citydisplay= ''
  let icon = ''
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
     icon = mainWidgetinfo[6]

  }

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

  useEffect(()=>{
    function set_icons(){
      console.log('yes')
      console.log(icon)
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