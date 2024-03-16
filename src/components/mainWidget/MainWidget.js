import React from 'react'
import './MainWidget.css'
import LocationPin from '../../assets/icons/ui/locationPin.svg'
import GreenTick from '../../assets/icons/ui/greenTick.svg'
import LargeSun from '../../assets/icons/weather/sunLarge.svg'
import { useState, useEffect } from 'react';

function MainWidget({lonlat}) {
  let url_backup = ""
    const apikey = "6e64a78c03e21e2143da3ea13650b0de"
    const locationlat = lonlat[0]
    const locationlon = lonlat[1]
    const city = lonlat[2]
    const [citydisplay, setCity] = useState('London')
    
    const [temp, setTemp] = useState('')
    const [humidity, setHumidity] = useState('')
    const [feelslike, setFeelslike] = useState('')
    const [high, setHigh] =useState('')
    const [low, setLow] = useState('')
    let url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${apikey}`
    if (typeof locationlat === "number"){
      url_backup = `https://api.openweathermap.org/data/2.5/weather?lat=${locationlat}&lon=${locationlon}&units=Metric&appid=${apikey}`

    }
    else{
        url_backup = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${apikey}`
    }
    //
    useEffect(() => {
      // console.log('44')
      const fetchData = async () => {
        let result = await fetch(url)
             if ((result.status === 404) || (result.status === 400)){
                console.log('Bad City Name')
                // url = url_backup
                result = await fetch(url_backup)
                console.log("hhhhhhhhhh " +url + '\n' + url_backup)
                // setCity('London')
            }
            if(url === url_backup){}
            // else{setCity(city)}
            result.json().then(json => {
                setTemp(Math.floor(json.main.temp))
                setFeelslike(Math.floor(json.main.feels_like))
                setHumidity(Math.floor(json.main.humidity))
                setLow(Math.floor(json.main.temp_min))
                setHigh(Math.floor(json.main.temp_max))
            })  


        
        }

      fetchData();
    })

  // const [Location, SetLocation] = useState("London")
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